# User Guide Webapp

## Asset Manager Webapp folder Structure 
The project is coded using a simple and intuitive structure presented bellow:

```bash
< PROJECT ROOT >
   |
   |-- core/                               # Implements app logic and serve the static assets
   |    |-- settings.py                    # Django app bootstrapper
   |    |-- wsgi.py                        # Start the app in production
   |    |-- urls.py                        # Define URLs served by all apps/nodes
   |    |
   |    |-- static/
   |    |    |-- <css, JS, images>         # CSS files, Javascripts files
   |    |
   |    |-- templates/                     # Templates used to render pages
   |         |
   |         |-- includes/                 # HTML chunks and components
   |         |    |-- navigation.html      # Top menu component
   |         |    |-- sidebar.html         # Sidebar component
   |         |    |-- footer.html          # App Footer
   |         |    |-- scripts.html         # Scripts common to all pages
   |         |
   |         |-- layouts/                  # Master pages
   |         |    |-- base-fullscreen.html # Used by Authentication pages
   |         |    |-- base.html            # Used by common pages
   |         |
   |         |-- accounts/                 # Form pages
   |         |    |-- login.html           # Login page
   |         |    |-- add_assett.html      #  Add asset page
   |         |
   |      index.html                       # The default page
   |      documents.html                   # Documents page
   |      commit_details.html              # Commit details page
   |      source_dependencies.html         # Source Dependencies Page
   |       *.html                          # All other HTML pages
   |
   |-- authentication/                     # Handles auth routes (login and register)
   |    |
   |    |-- urls.py                        # Define authentication routes  
   |    |-- views.py                       # Handles login and registration  
.   |    |-- forms.py                       # Define auth forms
   |
   |-- asset/                              # Handles asset routes 
   |    |-- models.py                      # Contains asset related table data   
   |    |-- test_data.py                   # Contains test data which requires for testcases
   |    |-- tests.py                       # Contains testcases of asset
   |    |-- views.py                       # Handles Asset Details for UI
   |    |-- urls.py                        # Define asset routes  
   |
   |-- requirements.txt                    # Development modules 
   |
   |-- .env                                # Inject Configuration via Environment
   |-- manage.py                         # Start the app - Django default start script
   |
   |-- 

```

## Webapp Configuration
### Configurations are present in settings.py 

### Databases

```
In the Databases section we have added database configurations.

ENGINE : django.db.backends.mysql
NAME'  : pasa
USER': root
PASSWORD': ######
HOST': 10.140.3.83   
PORT': 32650
```

#### LDAP

```
In the LDAP section we have added configurations.

AUTH_LDAP_SERVER_URI = 'ldap://PTCPASADC1.pasa.pas.local'
AUTH_LDAP_BIND_DN = ''
AUTH_LDAP_USER_DN_TEMPLATE = ''
AUTH_LDAP_BIND_PASSWORD = ''
AUTH_LDAP_USER_SEARCH = LDAPSearch('OU=Service Accounts,OU=Accounts,OU=PASA,DC=pasa,DC=pas,DC=local',ldap.SCOPE_SUBTREE, 'uid=%(user)s')
AUTH_LDAP_GROUP_SEARCH = LDAPSearch('OU=Service Accounts,OU=Accounts,OU=PASA,DC=pasa,DC=pas,DC=local',ldap.SCOPE_SUBTREE, '(objectClass=top)')
AUTH_LDAP_GROUP_TYPE = ActiveDirectoryGroupType(name_attr="cn")
AUTH_LDAP_USER_ATTR_MAP = {
 'username':'uid',
'first_name': 'givenName',
'last_name': 'sn',
'email': 'mail',
}
AUTH_LDAP_ALWAYS_UPDATE_USER = True
```
## How to use Asset Manager Webapp 

```bash
# Get the code
git clone

# Virtualenv modules installation (Unix based systems)
virtualenv env
source env/bin/activate

# Virtualenv modules installation (Windows based systems)
# virtualenv env
# .\env\Scripts\activate

# Install Mysql dependencies
sudo apt-get install libmysqlclient-dev python-dev
# Install Ldap dependencies
sudo apt-get install libsasl2-dev python-dev libldap2-dev libssl-dev
# Install Redis Inmemory Database Cache
# $ sudo apt-get install redis-server
# Install modules - MySQL Storage
pip install -r requirements.txt
```

### In order to enable redis caching add below lines in settings.py

```
CACHES = {
  "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient"
        },
        "KEY_PREFIX": "example"

}
```

### If caching is not needed you can disable it by adding below lines in settings.py

```
CACHES = {

    "default": {
        "BACKEND": "django.core.cache.backends.dummy.DummyCache",
    }
}
```

## Run Redis Server in another terminal if redis cache is enabled

```bash
redis-server 

# Create tables
python manage.py makemigrations
python manage.py migrate

# Start the application (development mode)
python manage.py runserver # default port 8000

# Start the app - custom port
# python manage.py runserver 0.0.0.0:<your_port>

# Access the web app in browser: http://127.0.0.1:8000/
```

## How to run TestCases

#### We can Run testcases using below command.

```bash 
python manage.py test

# If all testcases are correct then it is showing 'OK' in the result, but if any testcase is not correct then it's showing 'Fail' in the result and also disply which testcase fail..
```
<br/>

> Note: To use the app, please access the registration page and create a new user. After authentication, the app will unlock the private pages.
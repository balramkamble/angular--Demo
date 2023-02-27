# User Guide

## Services Folder Structure 

```bash
< PROJECT ROOT >
|
   |-- conf/ 
        |-- config.yml                     # Contains configuration 
   |-- scripts/
        |-- repoinfo.sh
   |-- src/ 
        |-- asset_services.py               # Contains asset services
        |-- db_utils.py                     # Contains database related info
        |-- generate_metadata.py            # Contains metadata scripts
   |-- README.md
   |-- requirements.txt 
```

## Service Configuration
Services related configurations present in config.yaml.

#### Git section 

```
In the git section we can add git instances

instance: git.cloud.panasonicautomotive.com
  repository_include: "*"
  repository_exclude: ""
instance: git2.cloud.panasonicautomotive.com
  repository_include: "*"
  repository_exclude: ""
```

#### Authentication section

```
Authentication section wherein we can specify the username which is being used for the authentication.

username = ######
```


#### Database section

```
In the database section we will be, configuring the instance of the database.

instance: 10.140.3.83
port: 32650 
user_name: root
db_schema: pasa
table_name: asset_attrdetails
dependency_table_name: asset_dependency
asset_dependency_relation: asset_attrdetails_dependencies
asset_commits_table: asset_commits
asset_commits_attr_table: asset_attrdetails_change_log
documents_table: asset_documents
documents_attr_table: asset_attrdetails_document
license_table: asset_licenses
license_attr_table: asset_attrdetails_licenses
```

#### Asset Attributes section

```
In the asset attribute section we are specifying the different default parameters which needs to be configured through the config.yaml.

project: r2hpc
purpose: test
asil_level: A
memory_usage_ram: 1
memory_usage_rom: 1
lifecycle_phase: open
authors: example@ext.panasonicautomotive.com
safety_artifacts: test
example_usage: test
security_concerns: test
rating: 2
```

#### Documents section

```
In the document section we are providing configuration relatesd to documents

document_name: R2HPCDeveloper_StaticAnalysis_Guidelines_1.2
asset_name: "automotive/manifest:pasa-r2hpc-sa8295p-hqx-4.5.5.0-dev,cdc/plsw/SystemServices:pasa-sa8295p-hqx-dev-1.0,bootmicro/bsw/vector_bsw:pasa-r2hpc-cypress-dev-1.0"
type: STATIC_ANALYSI_GUIDE
url: "https://git.cloud.panasonicautomotive.com:8443/admin/repos/centralized/documentation"

document_name: R2-HPC_Integration_Master_Plan_V0.3
asset_name: "automotive/manifest:pasa-r2hpc-sa8295p-hqx-4.5.5.0-dev,cdc/plsw/SystemServices:pasa-sa8295p-hqx-dev-1.0,bootmicro/bsw/vector_bsw:pasa-r2hpc-cypress-dev-1.0"
type: PROPER_DOCUMENTATION
url: "https://git.cloud.panasonicautomotive.com:8443/admin/repos/centralized/documentation"
```

## How to run services

```bash
# Export workspace
export WORKSPACE=/data/wksp/r2hpc
sudo apt-get --yes update        
sudo apt-get --yes install libmysqlclient-dev python-dev        
sudo curl https://storage.googleapis.com/git-repo-downloads/repo -o /usr/bin/repo        
sudo chmod a+x /usr/bin/repo        
# Run Asset Scripts        
cd "${WORKSPACE}/scripts/metadata/services"        
pip3 install -r requirements.txt        
sudo chmod +x scripts/repoInfo.sh        
cd src
# Run asset_service.py
python asset_service.py -p "*******" -c ../conf/config.yaml
# Run generate_metadata.py
python generate_metadata.py -p "*******" -c ../conf/config.yaml
```


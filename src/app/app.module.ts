import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ParentComponent } from './components/parent/parent.component';
import { SenderChildComponent } from './components/sender-child/sender-child.component';
import { ReceiverChildComponent } from './components/receiver-child/receiver-child.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { ByBKParentComponent } from './components/practicebyBK/by-bk-parent/by-bk-parent.component';
import { ByBKChildFirstComponent } from './components/practicebyBK/by-bk-child-first/by-bk-child-first.component';
import { ByBKChildSecondComponent } from './components/practicebyBK/by-bk-child-second/by-bk-child-second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ContactsComponent,
    ParentComponent,
    SenderChildComponent,
    ReceiverChildComponent,
    DirectiveComponent,
    UserComponent,
    UsersComponent,
    UsersDetailsComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    ByBKParentComponent,
    ByBKChildFirstComponent,
    ByBKChildSecondComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

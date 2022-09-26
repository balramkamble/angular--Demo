import { Component, OnInit } from '@angular/core';
import { contactList } from 'src/app/data/contactList';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];

  constructor() { 
    this.contacts = contactList;
  }

  ngOnInit(): void {
  }

}
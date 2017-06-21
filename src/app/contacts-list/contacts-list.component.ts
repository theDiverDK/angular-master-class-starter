import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Contact } from "../models/contact";
import { ContactService } from "../contact.service";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})

export class ContactsListComponent implements OnInit {
  title = 'Angular 2 Master Class setup works!';
  contacts: Observable<Array<Contact>>;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }
}

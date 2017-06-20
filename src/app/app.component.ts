import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact'
import { ContactService } from './contact.service'

@Component({
  selector: 'trm-contacts-app',
  template: `
    <md-toolbar color="primary">Contacts</md-toolbar>
    <md-list>
      <md-list-item *ngFor="let contact of contacts; trackBy:identify">
        <img md-list-avatar [src]="contact.image" alt="Picture of {{contact.name}}" class="circle">
        <h3 md-line>{{contact.name}}</h3>
        <h1></h1>
      </md-list-item>
    </md-list>`,
  styleUrls: ['./app.component.scss']
})

export class ContactsAppComponent implements OnInit {
  title = 'Angular 2 Master Class setup works!';
  contacts: Array<Contact>;
  identify: number;

  constructor(private contactService: ContactService) {

  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}

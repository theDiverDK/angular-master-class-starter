import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data'
import { Contact } from './models/contact'

@Injectable()
export class ContactService {
  contacts: Array<Contact> = CONTACT_DATA;

  getContacts() {
    return this.contacts;
  }
}

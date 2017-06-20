import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { CONTACT_DATA } from './data/contact-data'
import { Contact } from './models/contact'
import { Observable } from "rxjs/Observable";

@Injectable()
export class ContactService {
  constructor(private http: Http) { }

  getContacts() {
    return this.http.get(`http://localhost:4201/api/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: string) {
    return this.http.get(`http://localhost:4201/api/contacts/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }

  updateContact(contact: Contact) {
    let url = `http://localhost:4201/api/contacts/${contact.id}`;

    return this.http.put(url, contact);
  }
}


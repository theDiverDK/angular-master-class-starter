import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { CONTACT_DATA } from './data/contact-data'
import { Contact } from './models/contact'
import { Observable } from "rxjs/Observable";

@Injectable()
export class ContactService {
  constructor(private http: Http) { }

  apiEndpoint: string = `http://localhost:4201/api`;

  getContacts() {
    return this.http.get(`${this.apiEndpoint}/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: string) {
    return this.http.get(`${this.apiEndpoint}/contacts/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }

  updateContact(contact: Contact) {
    let url = `${this.apiEndpoint}/contacts/${contact.id}`;

    return this.http.put(url, contact);
  }

  search(term: string){
    let url = `${this.apiEndpoint}/search?text=${term}`;

    return this.http.get(url)
      .map(res => res.json())
      .map(data => data.items);
  }
}


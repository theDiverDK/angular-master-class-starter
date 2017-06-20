import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Contact } from './../models/contact';
import { ContactService } from './../contact.service';

@Component({
  selector: 'trm-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})

export class ContactsDetailsComponent implements OnInit {
  contact: Contact;

  constructor(private contactService: ContactService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.contactService.getContact(id).subscribe(contact => this.contact = contact);
  }
}

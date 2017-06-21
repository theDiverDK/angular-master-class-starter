import { Observable } from 'rxjs/Observable';
import { Contact } from './../models/contact';
import { Component, OnInit } from '@angular/core';
import { ContactService } from "../contact.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})

export class ContactsEditorComponent implements OnInit {
  contact: Observable<Contact>;// = <Contact>{ address: {} };

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.contact = this.contactService.getContact(id);
  }

  cancel(contact: Contact) {
    this.goToDetails();
  }

  save(contact: Contact) {
    this.contactService.updateContact(contact).subscribe(
      () => this.goToDetails());
  }

  private goToDetails() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}

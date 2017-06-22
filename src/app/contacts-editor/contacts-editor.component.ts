import { EventBusService } from './../shared/eventBusService';
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
  contact: Contact;// = <Contact>{ address: {} };

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router, private eventBus: EventBusService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.contactService.getContact(id)
      .subscribe(contact => {
        this.contact = contact;
        this.eventBus.emit('appTitleChange', `Edit : ${this.contact.name}`);
      });
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

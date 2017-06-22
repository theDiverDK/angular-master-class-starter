import { SelectContactAction, UpdateContactAction } from './../state-management/contacts/contacts.actions';
import { ApplicationState } from './../state-management/index';
import { ChangeTitleAction } from './../state-management/title/title.actions';
import { EventBusService } from './../shared/eventBusService';
import { Observable } from 'rxjs/Observable';
import { Contact } from './../models/contact';
import { Component, OnInit } from '@angular/core';
import { ContactService } from "../contact.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Store } from "@ngrx/store";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})

export class ContactsEditorComponent implements OnInit {
  contact$: Observable<Contact>;// = <Contact>{ address: {} };

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router, private store: Store<ApplicationState>) { }

  ngOnInit() {
    let contactId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new SelectContactAction(+contactId));

    this.contact$ = this.store.select(state => {
      let id = state.contacts.selectedContactId;
      let contact = state.contacts.list.find(contact => contact.id == id);
      return Object.assign({}, contact);
    });
  }

  cancel(contact: Contact) {
    this.goToDetails();
  }

  save(contact: Contact) {

    this.contactService.updateContact(contact).subscribe(
      () => {
        this.store.dispatch(new UpdateContactAction(contact));
        this.goToDetails()
      });
  }

  private goToDetails() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}

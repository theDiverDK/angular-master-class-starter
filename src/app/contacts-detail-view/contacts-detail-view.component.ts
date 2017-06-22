import { SelectContactAction } from './../state-management/contacts/contacts.actions';
import { ApplicationState } from './../state-management/index';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from "@angular/router";

import { Contact } from './../models/contact';
import { ContactService } from './../contact.service';
import { EventBusService } from "../shared/eventBusService";
import { Store } from "@ngrx/store";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})

export class ContactsDetailViewComponent implements OnInit {
  contact$: Observable<Contact>;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<ApplicationState>) { }

  ngOnInit() {
    let contactId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new SelectContactAction(+contactId));

    this.contact$ = this.store.select(state => {
      let id = state.contacts.selectedContactId;
      let contact = state.contacts.list.find(contact => contact.id === id);
      return Object.assign({}, contact);
    });
  }

  navigateToEditor() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }

  navigateToList() {
    this.router.navigate(["/"]);
  }
}

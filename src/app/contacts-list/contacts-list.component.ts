import { ChangeTitleAction } from './../state-management/title/title.actions';
import { ApplicationState } from './../state-management/index';
import { LoadContactsSuccessAction } from './../state-management/contacts/contacts.actions';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Contact } from '../models/contact';
import { ContactService } from "../contact.service";
import { EventBusService } from '../shared/eventBusService'

import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/takeUntil'
import { Store } from "@ngrx/store";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})

export class ContactsListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>;

  terms$ = new Subject<string>();

  constructor(
    private contactsService: ContactService,
    private store: Store<ApplicationState>
  ) {
  }

  ngOnInit() {
    this.contacts$ = this.store.select(state => state.contacts.list);

    this.contactsService
      .getContacts()
      .subscribe(contacts => {
        this.store.dispatch(
          new LoadContactsSuccessAction(contacts)
        );
      });

    this.store.dispatch(new ChangeTitleAction("Contacts"))
  }
}

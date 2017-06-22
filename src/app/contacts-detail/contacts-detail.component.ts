import { ChangeTitleAction } from './../state-management/title/title.actions';
import { ApplicationState } from './../state-management/index';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from "@angular/router";

import { Contact } from './../models/contact';
import { ContactService } from './../contact.service';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})

export class ContactsDetailsComponent implements OnInit{
  @Input() contact: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter<void>();

  constructor(  private store: Store<ApplicationState>){
  }

  ngOnInit() {
    this.store.dispatch(new ChangeTitleAction("Details"))
  }
}

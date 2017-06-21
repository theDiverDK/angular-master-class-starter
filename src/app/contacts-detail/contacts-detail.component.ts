import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Contact } from './../models/contact';
import { ContactService } from './../contact.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})

export class ContactsDetailsComponent implements OnInit {
  @Input() contact: Observable<Contact>;
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter<void>();

  ngOnInit() {
  }

  navigateBack(){
    this.back.emit();
  }

  editContact(contact: Contact){
    this.edit.emit(contact);
  }
}

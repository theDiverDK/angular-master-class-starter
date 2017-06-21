import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from "@angular/router";

import { Contact } from './../models/contact';
import { ContactService } from './../contact.service';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})

export class ContactsDetailViewComponent implements OnInit {
  contact: Observable<Contact>;

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contact = this.contactService.getContact(id);
  }

  navigateToEditor() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }

  navigateToList() {
    this.router.navigate(["/"]);
  }
}

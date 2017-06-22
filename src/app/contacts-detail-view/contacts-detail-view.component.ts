import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from "@angular/router";

import { Contact } from './../models/contact';
import { ContactService } from './../contact.service';
import { EventBusService } from "../shared/eventBusService";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})

export class ContactsDetailViewComponent implements OnInit {
  contact: Contact;

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router, private eventBus: EventBusService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactService.getContact(id)
      .subscribe(x => {
        this.contact = x;
        this.eventBus.emit('appTitleChange', this.contact.name);
      }
      );
  }

  navigateToEditor() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }

  navigateToList() {
    this.router.navigate(["/"]);
  }
}

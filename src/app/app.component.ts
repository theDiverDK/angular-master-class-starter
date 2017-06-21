import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact'
import { ContactService } from './contact.service'
import { EventBusService } from './shared/eventBusService'

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class ContactsAppComponent implements OnInit {
  constructor(private eventBus: EventBusService) { }

  title: string;

  ngOnInit() {
    this.eventBus.observe('appTitleChange')
      .subscribe(title => this.title = title);
  }
}


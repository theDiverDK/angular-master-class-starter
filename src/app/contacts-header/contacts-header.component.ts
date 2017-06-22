import { Component, OnInit } from '@angular/core';
import { EventBusService } from "../shared/eventBusService";

@Component({
  selector: 'trm-contacts-header',
  templateUrl: './contacts-header.component.html',
  styleUrls: ['./contacts-header.component.css']
})
export class ContactsHeaderComponent implements OnInit {

  title: string = '';

  constructor(private eventBus: EventBusService) { }

  ngOnInit() {
    this.eventBus.observe('appTitleChange')
      .subscribe(title => this.title = title);
  }

}

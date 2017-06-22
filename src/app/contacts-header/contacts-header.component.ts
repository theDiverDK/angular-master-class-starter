import { ApplicationState } from './../state-management/index';

import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
  selector: 'trm-contacts-header',
  templateUrl: './contacts-header.component.html',
  styleUrls: ['./contacts-header.component.css']
})
export class ContactsHeaderComponent implements OnInit {

  title: Observable<string>;

  constructor(private store: Store<ApplicationState>
  ) { }

  ngOnInit() {
    this.title = this.store.select(state => state.title.title);
  }
}

import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Contact } from '../models/contact';
import { ContactService } from "../contact.service";
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/takeUntil'

@Component({
    selector: 'trm-contacts-list',
    templateUrl: './contacts-list.component.html',
    styleUrls: ['./contacts-list.component.css']
})

export class ContactsListComponent implements OnInit {
    title = 'Angular 2 Master Class setup works!';
    contacts: Observable<Array<Contact>>;

    terms$ = new Subject<string>();

    constructor(private contactService: ContactService) {
    }

    ngOnInit() {
        this.contacts = this.terms$
            .debounceTime(400)
            .distinctUntilChanged() // observable<string> stringen er term
            .switchMap(term => this.contactService.search(term)) // nu en observable<array<contact>>
            .merge(this.contactService.getContacts().delay(5000).takeUntil(this.terms$)) // bliver kun udført en gang, da den bliver udført og så afslutter den, og bliver derfor aldrig kørt igen, takeUntil gør at skulle this.term$ blive udført så afbryder den getContacts
          // meget af dette kode burde ligge i servicen, kun merge skal være her.
          // tilføj onErrorResume og return tom svar, både på getCOntacts, og search
          // så kan app'en håndtere at den mister forbindelse til serveren midlertidigt.


    }
}

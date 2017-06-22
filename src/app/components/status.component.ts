import { ApplicationState } from './../store/root-reducer';
import { VotesState } from './../votes/vote-state';
import { Component, OnInit, Inject } from '@angular/core';
import { Store } from './../store/store'
import { APP_STORE } from './../store/app-store';

@Component({
  selector: 'trm-status',
  template: `
    {{ state.counter }}
    <div class="tip">All Votes!</div>
  `,
  styles: [
    `:host {  text-align:center; font-size:1.1em; font-weight: bolder  }`,
    `.tip { font-size:0.7em; padding-top:5px;font-weight: normal;  }`
  ]
})

export class StatusComponent implements OnInit {

  state;

  constructor( @Inject(APP_STORE) private store: Store<ApplicationState>) {
  }

  ngOnInit() {
    this.state = this.store.getState().votes;

    this.store.subscribe(() => {
      debugger;
      this.state = this.store.getState().votes;
    })

  }

}


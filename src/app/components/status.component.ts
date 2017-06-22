import { Component, OnInit } from '@angular/core';
import { AppStore } from '../store/app-store';

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

export class StatusComponent implements OnInit{

  state;

  constructor(private store: AppStore) {
  }

  ngOnInit() {
    this.state = this.store.getState();

    this.store.subscribe(() => {
      this.state = this.store.getState();
    })

  }

}


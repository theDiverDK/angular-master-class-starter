import { VoteActions } from './../votes/vote-actions';
import { VotesState } from './../votes/vote-state';
import { APP_STORE } from './../store/app-store'
import { Store } from './../store/store'
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'trm-voter',
  template: `
    <div fxLayout="column" fxLayoutAlign="space-between center" fxFlex style="padding-left:10px;">
      <button (click)="increment()" md-fab class="yes" mdTooltip="Vote Yes!">
        <md-icon  class="md-24">thumb_up</md-icon>
      </button>

      <ng-content></ng-content>

      <button (click)="decrement()" md-fab class="no" mdTooltip="Vote No!">
        <md-icon class="md-24">thumb_down</md-icon>
      </button>
    </div>
  `,
  styles: [
    `button.yes { background-color: darkgreen; }`,
    `button.no { background-color: red; }`
  ]
})
export class VoterComponent {

  /**
   * Inject the appstore
   */
  constructor( @Inject(APP_STORE) private store: Store<VotesState>) { }

  increment() {
    this.store.dispatch({ type: VoteActions.YES });
  }

  decrement() {
    this.store.dispatch({ type: VoteActions.NO });
  }
}


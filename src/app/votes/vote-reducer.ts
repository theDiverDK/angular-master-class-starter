import { Type } from '@angular/core';
import { VoteActions } from './vote-actions';
import { INITIAL_VOTES_STATE } from './vote-state';

export function VoteReducer(state = INITIAL_VOTES_STATE, action) {

  switch (action.type) {
    case VoteActions.YES:
      state = { ...state, counter: state.counter + 1 };
      return state;

    case VoteActions.NO:
      state = { ...state, counter: state.counter - 1 };
      return state;

    default: return state;
  }
}

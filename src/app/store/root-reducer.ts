import { VotesState } from './../votes/vote-state';
import { VoteReducer } from './../votes/vote-reducer';

export interface ApplicationState {
  votes : VotesState
}

export const ROOT_REDUCER = {
  votes: VoteReducer
};

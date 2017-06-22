import { TitleState } from './title.reducer';
import { TitleAction, TitleActionTypes } from "./title.actions";

export interface TitleState {
  title: string;
}

const INITIAL_STATE: TitleState = {
  title: 'Unknown'
}

export function titleReducer(
  state: TitleState = INITIAL_STATE,
  action: TitleAction
) {
  switch (action.type) {
    case TitleActionTypes.CHANGE_TITLE:
      let result = { ...state, title: action.payload }
      return result;
    default:
      return state;
  }
}


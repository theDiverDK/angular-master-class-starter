import { Action } from '@ngrx/store';
import { Contact } from '../../models/contact';

export namespace TitleActionTypes {
  export const CHANGE_TITLE = 'CHANGE TITLE';
}

export class ChangeTitleAction implements Action {
  readonly type = TitleActionTypes.CHANGE_TITLE;
  constructor(public payload: string) { }
}

export type TitleAction = ChangeTitleAction;

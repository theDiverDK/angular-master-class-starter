import { Action } from '@ngrx/store';
import { Contact } from '../../models/contact';

export namespace ContactsActionTypes {
  export const LOAD_CONTACTS_SUCCESS = '[Contacts] Load Contacts Success';
  export const SELECT_CONTACT = "[Contacts] Select Contact";
  export const UPDATE_CONTACT = "[Contacts] Update Contact";
}

export class LoadContactsSuccessAction implements Action {
  readonly type = ContactsActionTypes.LOAD_CONTACTS_SUCCESS;
  constructor(public payload: Array<Contact>) { }
}

export class SelectContactAction implements Action {
  readonly type = ContactsActionTypes.SELECT_CONTACT;
  constructor(public payload: number) { }
}

export class UpdateContactAction implements Action {
  readonly type = ContactsActionTypes.UPDATE_CONTACT;
  constructor(public payload: Contact) { }
}


export type ContactsActions = LoadContactsSuccessAction | SelectContactAction | UpdateContactAction;

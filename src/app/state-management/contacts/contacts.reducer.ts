import { ContactsState } from './contacts.reducer';
import { Contact } from '../../models/contact';
import { ContactsActions, ContactsActionTypes, LoadContactsSuccessAction } from "./contacts.actions";

export interface ContactsState {
  list: Array<Contact>;
  selectedContactId: number | null;
}

const INITIAL_STATE: ContactsState = {
  list: [],
  selectedContactId: null
}

export function contactsReducer(
  state: ContactsState = INITIAL_STATE,
  action: ContactsActions
) {
  switch (action.type) {
    case ContactsActionTypes.LOAD_CONTACTS_SUCCESS:
      let result = { ...state, list: action.payload }
      return result;
    default:
      return state;
  }
}


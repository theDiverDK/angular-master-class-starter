import { Contact } from '../../models/contact';
import { ContactsActions, ContactsActionTypes } from "./contacts.actions";

export interface ContactsState {
  list: Array<Contact>;
  selectedContactId: number | null;
}

const INITIAL_STATE: ContactsState = {
  list: [],
  selectedContactId: null
}


export function contactsReducer(
  state = INITIAL_STATE,
  action: ContactsActions
) {
  debugger;
  switch (action.type) {
    case ContactsActionTypes.LOAD_CONTACTS_SUCCESS:
      break;
    default:
      return state;
  }
}


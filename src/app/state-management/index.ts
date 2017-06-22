import { contactsReducer, ContactsState } from './contacts/contacts.reducer';

export interface ApplicationState {
  contacts: ContactsState;
}

export const ROOT_REDUCER = {
  contacts: contactsReducer
}

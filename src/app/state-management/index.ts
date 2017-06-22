import { contactsReducer, ContactsState } from './contacts/contacts.reducer';
import { titleReducer, TitleState } from "./title/title.reducer";

export interface ApplicationState {
  contacts: ContactsState;
  title: TitleState;
}

export const ROOT_REDUCER = {
  contacts: contactsReducer,
  title: titleReducer
}

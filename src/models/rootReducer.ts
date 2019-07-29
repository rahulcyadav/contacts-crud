import { combineReducers } from 'redux';
import contactsSlice, { IContacts } from './contacts/slice';
import createContactSlice, { ICreateContact } from './createContact/slice';

export interface IRootReducer {
  contacts: IContacts;
  createContact: ICreateContact;
}

const rootReducer = combineReducers<IRootReducer>({
  contacts: contactsSlice.reducer,
  createContact: createContactSlice.reducer,
});

export default rootReducer;

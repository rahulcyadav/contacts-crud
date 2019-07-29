import { combineReducers } from 'redux';
import contactsSlice, { IContacts } from './contacts/slice';
import deleteContactSlice, { IDeleteContact } from './deleteContact/slice';
import upsertContactSlice, { IUpsertContact } from './upsertContact/slice';

export interface IRootReducer {
  contacts: IContacts;
  upsertContact: IUpsertContact;
  deleteContact: IDeleteContact;
}

const rootReducer = combineReducers<IRootReducer>({
  contacts: contactsSlice.reducer,
  upsertContact: upsertContactSlice.reducer,
  deleteContact: deleteContactSlice.reducer,
});

export default rootReducer;

import { useDispatch, useSelector } from 'react-redux';
import contactsSlice, { IContact, IContacts } from '../models/contacts/slice';
import deleteContactSlice from '../models/deleteContact/slice';
import { IRootReducer } from '../models/rootReducer';
import upsertContactSlice from '../models/upsertContact/slice';

const useContacts = () => {
  const contacts = useSelector<IRootReducer, IContacts>(
    state => state.contacts
  );

  const dispatch = useDispatch();

  const fetchContactsRequest = () => {
    dispatch(contactsSlice.actions.fetchRequest());
  };

  const upsertContactRequest = (values: IContact) => {
    dispatch(upsertContactSlice.actions.upsertRequest(values));
  };
  const deleteContactRequest = (id: number) => {
    dispatch(deleteContactSlice.actions.deleteRequest(id));
  };

  return {
    contacts,
    fetchContactsRequest,
    upsertContactRequest,
    deleteContactRequest,
  };
};

export default useContacts;

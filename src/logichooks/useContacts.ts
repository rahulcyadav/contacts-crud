import { useDispatch, useSelector } from 'react-redux';
import contactsSlice, { IContacts } from '../models/contacts/slice';
import { IRootReducer } from '../models/rootReducer';

const useContacts = () => {
  const contacts = useSelector<IRootReducer, IContacts>(
    state => state.contacts
  );

  const dispatch = useDispatch();

  const fetchContactsRequest = () => {
    dispatch(contactsSlice.actions.fetchRequest());
  };

  return { contacts, fetchContactsRequest };
};

export default useContacts;

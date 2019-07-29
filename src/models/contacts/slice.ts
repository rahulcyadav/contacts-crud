import { Action, createSlice, PayloadAction, Slice } from 'redux-starter-kit';
import createContactSlice from '../createContact/slice';

export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
}

export interface IContacts {
  isLoading: boolean;
  error: string | null;
  data: IContact[] | null;
}

const contactsSlice: Slice<IContacts, any> = createSlice<IContacts, any>({
  slice: 'contacts',
  initialState: { isLoading: false, error: null, data: null },
  reducers: {
    fetchRequest: (
      state: IContacts,
      action: Action<'contacts/fetchRequest'>
    ) => {
      state.isLoading = true;
    },
    fetchSuccess: (
      state: IContacts,
      action: PayloadAction<IContact[], 'contacts/fetchSuccess'>
    ) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchFailure: (
      state: IContacts,
      action: PayloadAction<string, 'contacts/fetchFailure'>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [createContactSlice.actions.createSuccess.type]: (
      state: IContacts,
      action: PayloadAction<IContact, 'createContact/createSuccess'>
    ) => {
      state.data!.push(action.payload);
    },
  },
});

export default contactsSlice;

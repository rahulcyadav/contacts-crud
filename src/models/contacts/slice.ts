import { Action, createSlice, PayloadAction, Slice } from 'redux-starter-kit';
import deleteContactSlice from '../deleteContact/slice';
import upsertContactSlice from '../upsertContact/slice';

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
    [upsertContactSlice.actions.upsertSuccess.type]: (
      state: IContacts,
      action: PayloadAction<IContact, 'upsertContact/upsertSuccess'>
    ) => {
      const index = state.data!.findIndex(
        contact => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.data!.splice(index, 1, action.payload);
      } else {
        state.data!.push(action.payload);
      }
    },
    [deleteContactSlice.actions.deleteSuccess.type]: (
      state: IContacts,
      action: PayloadAction<number, 'deleteContact/deleteSuccess'>
    ) => {
      state.data!.splice(
        state.data!.findIndex(contact => contact.id === action.payload),
        1
      );
    },
  },
});

export default contactsSlice;

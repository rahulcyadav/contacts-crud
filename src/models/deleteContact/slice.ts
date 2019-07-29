import { createSlice, PayloadAction, Slice } from 'redux-starter-kit';
import { IContact } from '../contacts/slice';

export interface IDeleteContact {
  isLoading: boolean;
  error: string | null;
}

const deleteContactSlice: Slice<IDeleteContact, any> = createSlice<
  IDeleteContact,
  any
>({
  slice: 'deleteContact',
  initialState: { isLoading: false, error: null },
  reducers: {
    deleteRequest: (
      state: IDeleteContact,
      action: PayloadAction<number, 'deleteContact/deleteRequest'>
    ) => {
      state.isLoading = true;
    },
    deleteSuccess: (
      state: IDeleteContact,
      action: PayloadAction<number, 'deleteContact/deleteSuccess'>
    ) => {
      state.isLoading = false;
      state.error = null;
    },
    deleteFailure: (
      state: IDeleteContact,
      action: PayloadAction<string, 'deleteContact/deleteFailure'>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default deleteContactSlice;

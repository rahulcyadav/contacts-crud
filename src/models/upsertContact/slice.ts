import { createSlice, PayloadAction, Slice } from 'redux-starter-kit';
import { IContact } from '../contacts/slice';

export interface IUpsertContact {
  isLoading: boolean;
  error: string | null;
}

const upsertContactSlice: Slice<IUpsertContact, any> = createSlice<
  IUpsertContact,
  any
>({
  slice: 'upsertContact',
  initialState: { isLoading: false, error: null },
  reducers: {
    upsertRequest: (
      state: IUpsertContact,
      action: PayloadAction<IContact, 'upsertContact/upsertRequest'>
    ) => {
      state.isLoading = true;
    },
    upsertSuccess: (
      state: IUpsertContact,
      action: PayloadAction<IContact, 'upsertContact/upsertSuccess'>
    ) => {
      state.isLoading = false;
      state.error = null;
    },
    upsertFailure: (
      state: IUpsertContact,
      action: PayloadAction<string, 'upsertContact/upsertFailure'>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default upsertContactSlice;

import { Action, createSlice, PayloadAction, Slice } from 'redux-starter-kit';

export interface ICreateContact {
  isLoading: boolean;
  error: string | null;
}

const createContactSlice: Slice<ICreateContact, any> = createSlice<
  ICreateContact,
  any
>({
  slice: 'createContact',
  initialState: { isLoading: false, error: null },
  reducers: {
    createRequest: (
      state: ICreateContact,
      action: Action<'createContact/createRequest'>
    ) => {
      state.isLoading = true;
    },
    createSuccess: (
      state: ICreateContact,
      action: PayloadAction<string, 'createContact/createSuccess'>
    ) => {
      state.isLoading = false;
      state.error = null;
    },
    createFailure: (
      state: ICreateContact,
      action: PayloadAction<string, 'createContact/createFailure'>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default createContactSlice;

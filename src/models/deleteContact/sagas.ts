import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from 'redux-starter-kit';
import { IContact } from '../contacts/slice';
import { deleteContactApi } from './api';
import deleteContactSlice from './slice';

//-----------  Sagas  -----------//

export function* deleteContactSaga(
  action: PayloadAction<number, 'deleteContact/deleteRequest'>
) {
  try {
    const data = yield call(deleteContactApi, action.payload);

    yield put(deleteContactSlice.actions.deleteSuccess(action.payload));
  } catch (error) {
    yield put(deleteContactSlice.actions.deleteFailure(error));
  }
}

//-----------  Watchers  -----------//

export default function* watchDeleteContactSagas() {
  yield all([
    takeLatest(
      deleteContactSlice.actions.deleteRequest.type,
      deleteContactSaga
    ),
  ]);
}

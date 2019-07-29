import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from 'redux-starter-kit';
import { IContact } from '../contacts/slice';
import { upsertContactApi } from './api';
import upsertContactSlice from './slice';

//-----------  Sagas  -----------//

export function* upsertContactSaga(
  action: PayloadAction<IContact, 'upsertContact/upsertRequest'>
) {
  try {
    const translatedData = { ...action.payload };
    if (translatedData.id === 0) {
      delete translatedData.id;
    }
    const data = yield call(upsertContactApi, translatedData);

    yield put(upsertContactSlice.actions.upsertSuccess(data));
  } catch (error) {
    yield put(upsertContactSlice.actions.upsertFailure(error));
  }
}

//-----------  Watchers  -----------//

export default function* watchUpsertContactSagas() {
  yield all([
    takeLatest(
      upsertContactSlice.actions.upsertRequest.type,
      upsertContactSaga
    ),
  ]);
}

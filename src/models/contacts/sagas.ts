import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchContactsApi } from './api';
import contactsSlice from './slice';

//-----------  Sagas  -----------//

export function* fetchContactsSaga() {
  try {
    const data = yield call(fetchContactsApi);

    yield put(contactsSlice.actions.fetchSuccess(data));
  } catch (error) {
    yield put(contactsSlice.actions.fetchFailure(error));
  }
}

//-----------  Watchers  -----------//

export default function* watchContactsSagas() {
  yield all([
    takeLatest(contactsSlice.actions.fetchRequest.type, fetchContactsSaga),
  ]);
}

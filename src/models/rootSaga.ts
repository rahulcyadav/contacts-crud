import { all, fork } from 'redux-saga/effects';
import watchContactsSagas from './contacts/sagas';
import watchDeleteContactSagas from './deleteContact/sagas';
import watchUpsertContactSagas from './upsertContact/sagas';

const rootSaga = function*() {
  yield all([
    fork(watchContactsSagas),
    fork(watchUpsertContactSagas),
    fork(watchDeleteContactSagas),
  ]);
};

export default rootSaga;

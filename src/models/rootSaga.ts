import { all, fork } from 'redux-saga/effects';
import watchContactsSagas from './contacts/sagas';

const rootSaga = function*() {
  yield all([fork(watchContactsSagas)]);
};

export default rootSaga;

import { all, fork } from 'redux-saga/effects';

import { authSaga } from './auth';
import { instancesSaga } from './instances';

export function* rootSaga() {
  yield all([fork(instancesSaga)]);
  yield all([fork(authSaga)]);
}

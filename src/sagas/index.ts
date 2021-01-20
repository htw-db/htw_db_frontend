import { all, fork } from 'redux-saga/effects';

import { instancesSaga } from './instances';

export function* rootSaga() {
  yield all([fork(instancesSaga)]);
}

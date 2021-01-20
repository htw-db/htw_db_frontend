import { call, put, takeLatest } from 'redux-saga/effects';

import { InstanceInterface } from '../types';
import { getInstances } from '../api/instances';
import { getInstancesStart, getInstancesSuccess, getInstancesFailed } from '../slices/instances';

function* handleGetInstances() {
  try {
    const response = yield call(getInstances);
    const instances: InstanceInterface[] = response.data;
    yield put(getInstancesSuccess(instances));
  } catch (error) {
    yield put(getInstancesFailed(error.toString()));
  }
}

export function* instancesSaga() {
  yield takeLatest(getInstancesStart.type, handleGetInstances);
}

import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { AddInstanceInterface, InstanceInterface } from '../types';
import { addInstance, getInstances } from '../api/instances';
import {
  getInstancesStart,
  getInstancesSuccess,
  getInstancesFailed,
  addInstanceStart,
  addInstanceSuccess,
  addInstanceFailed,
} from '../slices/instances';

function* handleGetInstances() {
  try {
    const response = yield call(getInstances);
    const instances: InstanceInterface[] = response.data;
    yield put(getInstancesSuccess(instances));
  } catch (error) {
    yield put(getInstancesFailed(error.toString()));
  }
}

function* handleAddInstance(action: PayloadAction<AddInstanceInterface>) {
  try {
    const response = yield call(addInstance, action.payload);
    const instance: InstanceInterface = response.data;
    yield put(addInstanceSuccess(instance));
  } catch (error) {
    yield put(addInstanceFailed(error.toString()));
  }
}

export function* instancesSaga() {
  yield takeEvery(getInstancesStart.type, handleGetInstances);
  yield takeEvery(addInstanceStart.type, handleAddInstance);
}

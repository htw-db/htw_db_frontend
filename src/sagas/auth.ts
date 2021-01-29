import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { LdapCredentialsInterface } from '../types';
import { login } from '../api/auth';
import { loginStart, loginSuccess, loginFailed } from '../slices/auth';

function* handleLogin({ payload }: PayloadAction<LdapCredentialsInterface>) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: AxiosResponse<any> = yield call(login, payload);
    if (response.status === 200) {
      const data = response.data as string;
      yield put(loginSuccess(data));
    } else {
      yield put(loginFailed(response.statusText));
    }
  } catch (error) {
    yield put(loginFailed(error.toString()));
  }
}

export function* authSaga() {
  yield takeLatest(loginStart.type, handleLogin);
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LdapCredentialsInterface, ProfileInterface } from '../types';
import { setAuthorization } from '../utils/axiosConfig';
import { decodeJwt } from '../utils/jwtUtils';

interface AuthState {
  profile?: ProfileInterface;
  token?: string;
  isLoading: boolean;
  error?: string;
}

const restoreInitialSate = (): AuthState => {
  const token = localStorage.getItem('token');
  if (token) {
    const profile = decodeJwt(token);
    if (profile) {
      setAuthorization(token);
      return { isLoading: false, token, profile };
    }
  }
  return { isLoading: false };
};

export const initialState: AuthState = restoreInitialSate();

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state, { payload }: PayloadAction<LdapCredentialsInterface>) {
      state.isLoading = true;
      state.error = undefined;
      state.profile = undefined;
    },
    loginSuccess(state, { payload }: PayloadAction<string>) {
      state.error = undefined;
      state.token = payload;
      const profile = decodeJwt(payload);
      if (profile) {
        state.profile = profile;
        localStorage.setItem('token', payload);
        setAuthorization(payload);
      } else {
        state.profile = undefined;
        state.error = 'Invalid token';
        localStorage.removeItem('token');
        setAuthorization('');
      }
      state.isLoading = false;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.profile = undefined;
      localStorage.removeItem('token');
      setAuthorization('');
      state.isLoading = false;
    },
    logout(state) {
      state.isLoading = true;
      localStorage.removeItem('token');
      setAuthorization('');
      state.token = undefined;
      state.profile = undefined;
      state.isLoading = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailed, logout } = AuthSlice.actions;

export default AuthSlice.reducer;

import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import instanceReducer from './slices/instances';
import menuReducer from './slices/menu';

const combinedReducers = combineReducers({
  auth: authReducer,
  instances: instanceReducer,
  menu: menuReducer,
});

export default combinedReducers;

import { combineReducers } from '@reduxjs/toolkit';

import instanceReducer from './slices/instances';
import menuReducer from './slices/menu';

const combinedReducers = combineReducers({
  instances: instanceReducer,
  menu: menuReducer,
});

export default combinedReducers;

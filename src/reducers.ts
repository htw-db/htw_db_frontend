import { combineReducers } from '@reduxjs/toolkit';

import instanceReducer from './slices/instances';

const combinedReducers = combineReducers({
  instances: instanceReducer,
});

export default combinedReducers;

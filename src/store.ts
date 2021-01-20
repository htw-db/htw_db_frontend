import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import combinedReducers from './rootReducer';
import { rootSaga } from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  // logger must be the last middleware in chain
  // eslint-disable-next-line global-require
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof combinedReducers>;
export default store;

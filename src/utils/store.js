import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from 'reducers';

import rootSaga from 'sagas/root';

const persistWhitelist = ['auth', 'account'];

const persistConfig = {
  key: 'root',
  storage,
  whiteList: persistWhitelist,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

const reduxStore = { store, persistor };

export default reduxStore;

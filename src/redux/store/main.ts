import {
  createStore, compose, applyMiddleware, combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rickAndMortyReducer } from 'redux/reducers';
import { rootSaga } from 'redux/sagas';

const rootReducer = combineReducers({
  rickMorty: rickAndMortyReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;

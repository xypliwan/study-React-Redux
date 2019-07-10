
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
    // applyMiddleware(thunk)
);
sagaMiddleware.run(todoSagas)

export default store;
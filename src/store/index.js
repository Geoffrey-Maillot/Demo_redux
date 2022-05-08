
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducer';
import client from 'src/middleware/client';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// On liste les middleware dans "applyMiddleware"
const enhancers = composeEnhancers(applyMiddleware(client));

const store = createStore(reducer, enhancers);

export default store;
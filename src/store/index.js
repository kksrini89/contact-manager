import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import { rootReducer } from './reducers';

// Redux Middleware
/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const middlewares = [logger, thunk];
const initial_state = {};

const store = createStore(
  rootReducer,
  initial_state,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

import { createStore, applyMiddleware,compose, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import * as reducers from './services/reducer';
import { reducer as toastrReducer } from "react-redux-toastr";

//import saga subscribers
import {
  authSubscriber,
  profileSubscriber,
} from './services/saga';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const sagaMiddleware =  createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

const reducer = combineReducers({
    ...reducers,
    toastr: toastrReducer
})
const store = createStore( reducer, initialState, composedEnhancers );

//run saga subscribers
sagaMiddleware.run(authSubscriber);
sagaMiddleware.run(profileSubscriber);

export default store;
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import { combineReducers } from 'redux-immutable';
import { apiMiddleware } from 'redux-api-middleware';
import { Map, List } from 'immutable';

import todoReducer from '../ducks/todos/todos';

const rootReducer = combineReducers({
    todos: todoReducer,
});

const defaultState = Map({
    todos: List(),
});

const middleware = applyMiddleware(apiMiddleware)

export default createStore(rootReducer, defaultState, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
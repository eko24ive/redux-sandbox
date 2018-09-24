import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import { combineReducers } from 'redux-immutable';
import { apiMiddleware } from 'redux-api-middleware';
import { Map, List, fromJS } from 'immutable';

import { VISIBILITY_ALL } from '../constants';

import todoReducer from '../ducks/todos';
import visibilityFilterReducer from '../ducks/visibilityFilter';

import localStorageMiddleware from '../middleware/localStorageMiddleware'

const rootReducer = combineReducers({
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer,
});

const defaultState = {
    todos: List(),
    visibilityFilter: VISIBILITY_ALL
};

const getInitialStore = () => {
	if (localStorage.getItem('todos')) {
		defaultState.todos = fromJS(JSON.parse(localStorage.getItem('todos'))).toList().map(todo => Map(todo));
	}
	if (localStorage.getItem('visibilityFilter')) {
		defaultState.visibilityFilter = JSON.parse(localStorage.getItem('visibilityFilter'));
	}

	return Map(defaultState);
};

const middleware = applyMiddleware(apiMiddleware, localStorageMiddleware);

export default createStore(rootReducer, getInitialStore(), compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
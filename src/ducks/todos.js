import { Map } from "immutable";
import { RSAA } from 'redux-api-middleware';

const TODO_ADD_REQUEST = 'TODO_ADD_REQUEST';
const TODO_ADD_SUCCESS = 'TODO_ADD_SUCCESS';
const TODO_ADD_ERROR = 'TODO_ADD_ERROR';


const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const TODO_REMOVE = 'TODO_REMOVE';
const TODO_TOGGLE_ALL = 'TODO_TOGGLE_ALL';
const TODO_CLEAR_COMPLETED = 'TODO_CLEAR_COMPLETED';

const createTodo = ({text, completed, id}) => (Map({
    id,
    text,
    completed,
}));

const toggleTodo = (todo) => {
    const completed = !todo.get('completed');

    return todo.set('completed', completed);
};

export const todoAdd = text => ({
    [RSAA]: {
        endpoint: 'http://localhost:4000/todo/add',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({text, completed: false}),
		types: [TODO_ADD_REQUEST, TODO_ADD_SUCCESS, TODO_ADD_ERROR]
    }
})

/* export const todoToggle = id => ({
    [RSAA]: {
        endpoint: 'http://localhost:4000/todo/add',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createTodo(text)),
		types: [TODO_ADD_REQUEST, TODO_ADD_SUCCESS, TODO_ADD_ERROR]
    }
}) */

export const todoToggle = index => ({
    type: TODO_TOGGLE,
    index,
});

export const todoRemove = index => ({
    type: TODO_REMOVE,
    index,
});

export const todoToggleAll = () => ({
    type: TODO_TOGGLE_ALL
});

export const todoClearCompleted = () => ({
    type: TODO_CLEAR_COMPLETED
});

export default function todos(state, {type, ...action}) {
    const {text, index} = action;

    switch(type) {
        case TODO_ADD_SUCCESS:
            return state.push(createTodo(action.payload));
        case TODO_ADD_ERROR:
            alert(`Error: ${type}`);

            return state;
        case TODO_TOGGLE:
            const todo = state.get(index);

            return state.set(index, toggleTodo(todo));
        case TODO_REMOVE:
            return state.remove(index);
        case TODO_TOGGLE_ALL:
            const isAllCompleted = state.every(todo => todo.get('completed'));

            if(isAllCompleted) {
                return state.map(toggleTodo);
            }

            return state.map(todo => {
                const comlpeted = todo.get('completed');

                if(!comlpeted) {
                    return toggleTodo(todo);
                }

                return todo;
            });
        case TODO_CLEAR_COMPLETED:
            return state.filter(todo => !todo.get('completed'));
        default: 
            return state;
    }
}
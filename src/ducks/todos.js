import { List, Map } from "immutable";

const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const TODO_REMOVE = 'TODO_REMOVE';

export const todoAdd = text => ({
    type: TODO_ADD,
    text,
});

export const todoToggle = index => ({
    type: TODO_TOGGLE,
    index,
});

export const todoRemove = index => ({
    type: TODO_REMOVE,
    index,
});

const createTodo = text => (Map({
    text,
    completed: false,
}));

const toggleTodo = (todo) => {
    const completed = !todo.get('completed');

    return todo.set('completed', completed);
};

export default function todos(state = List(), {type, ...action}) {
    const {text, index} = action;

    switch(type) {
        case TODO_ADD:
            return state.push(createTodo(text));
        case TODO_TOGGLE:
            const todo = state.get(index);

            return state.set(index, toggleTodo(todo));
        case TODO_REMOVE:
            return state.remove(index);
        default: 
            return state;
    }
}
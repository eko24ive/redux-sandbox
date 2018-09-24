import { Map } from "immutable";

const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const TODO_REMOVE = 'TODO_REMOVE';
const TODO_TOGGLE_ALL = 'TODO_TOGGLE_ALL';
const TODO_CLEAR_COMPLETED = 'TODO_CLEAR_COMPLETED';

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

export const todoToggleAll = () => ({
    type: TODO_TOGGLE_ALL
});

export const todoClearCompleted = () => ({
    type: TODO_CLEAR_COMPLETED
});

const createTodo = text => (Map({
    text,
    completed: false,
}));

const toggleTodo = (todo) => {
    const completed = !todo.get('completed');

    return todo.set('completed', completed);
};

export default function todos(state, {type, ...action}) {
    const {text, index} = action;

    switch(type) {
        case TODO_ADD:
            return state.push(createTodo(text));
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
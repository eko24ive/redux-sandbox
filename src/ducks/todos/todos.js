import { List } from "immutable";

const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const TODO_REMOVE = 'TODO_REMOVE';

const createTodo = text => ({
    text,
    completed: false,
});

const toggleTodo = ({completed, ...todo}) => ({
    completed: !completed,
    ...todo
});

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
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { VISIBILITY_ACTIVE, VISIBILITY_COMPLETED } from '../constants';

import {todoAdd, todoToggle, todoRemove, todoToggleAll, todoClearCompleted} from '../ducks/todos';
import {setVisibilityAll, setVisibilityActive, setVisibilityCompleted} from '../ducks/visibilityFilter';

import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import VisibilityFilter from '../components/VisibilityFilter';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
`;

const Home = ({
    todos,
    visibilityFilter,
    totalTodos,
    showClearCompleted,
    todoAdd,
    todoToggle,
    todoRemove,
    todoToggleAll,
    todoClearCompleted,
    setVisibilityAll,
    setVisibilityActive,
    setVisibilityCompleted
}) => (
    <HomeWrapper>
        <TodoInput
            todoAdd={todoAdd} 
            todoToggleAll={todoToggleAll}
        />
        <TodoList 
            todos={todos}
            todoToggle={todoToggle}
            todoRemove={todoRemove}
        />
        <VisibilityFilter
            totalTodos={totalTodos}
            visibilityFilter={visibilityFilter}
            showClearCompleted={showClearCompleted}
            setVisibilityAll={setVisibilityAll}
            setVisibilityActive={setVisibilityActive}
            setVisibilityCompleted={setVisibilityCompleted}
            todoClearCompleted={todoClearCompleted}
        />
    </HomeWrapper>
)


const getVisibleTodos = (todos, visibilityFilter) => todos.filter(todo => {
    const completed = todo.get('completed');

    switch(visibilityFilter) {
        case VISIBILITY_ACTIVE:
            return !completed;
        case VISIBILITY_COMPLETED:
            return completed;
        default:
            return true;
    }
});

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.get('todos'), state.get('visibilityFilter')),
    visibilityFilter: state.get('visibilityFilter'),
    totalTodos: state.get('todos').size,
    showClearCompleted: state.get('todos').some(todo => todo.get('completed'))
});

const mapDispatchToProps = dispatch => bindActionCreators({
    todoAdd, todoToggle, todoRemove, todoToggleAll, todoClearCompleted,
    setVisibilityAll, setVisibilityActive, setVisibilityCompleted
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
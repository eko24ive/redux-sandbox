import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

import {todoAdd, todoToggle, todoRemove} from '../ducks/todos';

const HomeWrapper = styled.div`
    padding: 20px 40px;
`;

const Home = ({
    todos,
    todoAdd,
    todoToggle,
    todoRemove
}) => (
    <HomeWrapper>
        <TodoInput todoAdd={todoAdd}/>
        <TodoList todos={todos} todoToggle={todoToggle} todoRemove={todoRemove}/>
    </HomeWrapper>
)

const mapStateToProps = state => ({
    todos: state.get('todos')
});

const mapDispatchToProps = dispatch => bindActionCreators({
    todoAdd: todoAdd,
    todoToggle: todoToggle,
    todoRemove: todoRemove,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
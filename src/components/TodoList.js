import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';

const TodoListWrapper = styled.div`
    margin: 30px 0;
    width: 100%;
    min-height: 300px;
    max-height: 300px;
`;

const TodoList = ({
    todos,
    todoToggle,
    todoRemove,
}) => (
    <TodoListWrapper>
        {todos.size === 0 && <span>Sorry, can't show you any todos :c</span>}
        {todos.map((todo, index) => (<Todo todo={todo} key={index} index={index} todoToggle={todoToggle} todoRemove={todoRemove}/>))}
    </TodoListWrapper>
);

export default TodoList;

import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';

const TodoListWrapper = styled.div`

`;

const TodoList = ({
    todos,
    todoToggle,
    todoRemove,
}) => (
    <TodoListWrapper>
        {todos.map((todo, index) => (<Todo todo={todo} key={index} index={index} todoToggle={todoToggle} todoRemove={todoRemove}/>))}
    </TodoListWrapper>
);

export default TodoList;

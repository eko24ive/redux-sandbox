import React from 'react';
import styled from 'styled-components';

const TodoWrapper = styled.div`
    & > *{
        display: inline-block;
    }
`;

const TodoButton = styled.div`
    cursor: pointer;
`;

const TodoLabel = styled.span`
    cursor: pointer;
`;

const Todo = ({
    todo,
    index,
    todoToggle,
    todoRemove
}) => {
    return (
        <TodoWrapper>
            <TodoButton onClick={() => todoToggle(index)}>{todo.get('completed') ? '✔️' : '⭕'}</TodoButton>
            <TodoLabel>{ todo.get('text') }</TodoLabel>
            <TodoButton onClick={() => todoRemove(index)}>🗑️</TodoButton>
        </TodoWrapper>
    );
}

export default Todo;
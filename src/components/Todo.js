import React from 'react';
import styled from 'styled-components';

const TodoWrapper = styled.div`
    & > *{
        display: inline-block;
    }

    font-size: 30px;
    display: flex;
    justify-content: space-around;
    font-family: 'Arial';
    align-items: baseline;
`;

const TodoButton = styled.div`
    cursor: pointer;
`;

const TodoLabel = styled.span`
    text-transform: capitalize;
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
import React from 'react';
import styled from 'styled-components';

const TodoInputWrapper = styled.div`
    padding: 5px 0;
    display: flex;
`;

const Input = styled.input`
    border: 0;
    box-shadow: 1px 1px 4px rgba(0,0,0,.2);
    border-radius: 3px;
    padding: 3px 7px;
    font-size: 24px;
    height: 40px;
    outline: 0;
`;

const CheckAllButton = styled.button`
    font-size: 40px;
    line-height: 0px;
    background: none;
    cursor: pointer;
    border: 0;
    outline: 0;
`;

const TodoInput = ({
    todoAdd,
    todoToggleAll
}) => {
    const onKeyPress = e => {
        if(e.charCode === 13) {
            todoAdd(e.target.value);

            e.target.value = '';
        }
    }

    return (
        <TodoInputWrapper>
            <CheckAllButton onClick={todoToggleAll}>☑️</CheckAllButton><Input onKeyPress={onKeyPress} placeholder="What do you need to do..."/>
        </TodoInputWrapper>
    );
}

export default TodoInput;
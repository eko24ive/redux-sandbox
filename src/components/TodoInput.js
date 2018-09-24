import React from 'react';
import styled from 'styled-components';

const TodoInputWrapper = styled.div`
    padding: 5px 0;
`;

const Input = styled.input`
    padding: 3px 7px;
    border-radius: 3px;
    font-size: 24px;
    height: 40px;
    outline: 0;
`;

const TodoInput = ({
    todoAdd
}) => {
    const onKeyPress = e => {
        if(e.charCode === 13) {
            todoAdd(e.target.value);

            e.target.value = '';
        }
    }

    return (
        <TodoInputWrapper>
            <Input onKeyPress={onKeyPress}/>
        </TodoInputWrapper>
    );
}

export default TodoInput;
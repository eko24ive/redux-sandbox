import React from 'react';
import styled from 'styled-components';

import { VISIBILITY_ALL, VISIBILITY_ACTIVE, VISIBILITY_COMPLETED } from '../constants';

const VisibilityFitlerWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 5px 20px;
    justify-content: space-around;
    align-items: baseline;
`;

const FilterButton = styled.button`
    border: 0;
    border-radius: 3px;
    margin: 0 7px;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 16px;
    outline: 0;
    color: #3498db;
    border: 1px solid transparent;
    background: none;
    
    ${({active}) => active ? `
        border: 1px solid #3498db;
    ` : null}

    &:hover {
        border: 1px solid #2980b9;
    }
`;

const ItemsLabel = styled.span`
    color: #95a5a6;
`;

const ClearLink = styled.span`
    color: #95a5a6;
    cursor: pointer;
`;

const VisibilityFitler = ({
    visibilityFilter,
    totalTodos,
    showClearCompleted,
    setVisibilityAll,
    setVisibilityActive,
    setVisibilityCompleted,
    todoClearCompleted
}) => (
    <VisibilityFitlerWrapper>
        <div>
            <ItemsLabel>{totalTodos} items left</ItemsLabel>
        </div>
        <div>
            <FilterButton active={visibilityFilter === VISIBILITY_ALL} onClick={setVisibilityAll}>All</FilterButton>
            <FilterButton active={visibilityFilter === VISIBILITY_ACTIVE} onClick={setVisibilityActive}>Active</FilterButton>
            <FilterButton active={visibilityFilter === VISIBILITY_COMPLETED} onClick={setVisibilityCompleted}>Completed</FilterButton>
        </div>
        <div>
            {showClearCompleted && <ClearLink onClick={todoClearCompleted}>Clear completed</ClearLink>}
        </div>
        
    </VisibilityFitlerWrapper>
)

export default VisibilityFitler;
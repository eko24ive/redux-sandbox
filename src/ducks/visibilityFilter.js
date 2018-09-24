import { VISIBILITY_ALL, VISIBILITY_ACTIVE, VISIBILITY_COMPLETED } from '../constants';

export const setVisibilityAll = () => ({
    type: VISIBILITY_ALL,
});

export const setVisibilityActive = () => ({
    type: VISIBILITY_ACTIVE,
});

export const setVisibilityCompleted = () => ({
    type: VISIBILITY_COMPLETED,
});

export default function visibilityReducer(state, { type }) {
    switch(type) {
        case VISIBILITY_ALL: 
        case VISIBILITY_ACTIVE: 
        case VISIBILITY_COMPLETED: 
            return state = type;
        default:
            return state;
    }
}
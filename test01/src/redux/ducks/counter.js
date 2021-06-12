const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INCREMENT2 = 'increment2';
const DECREMENT2 = 'decrement2';

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const increment2 = () => ({
    type: INCREMENT2
});

export const decrement2 = () => ({
    type: DECREMENT2
});

const initialState = {
    count: 0,
    count2: 10,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        case INCREMENT2:
            return {...state, count2: state.count2 + 1};
        case DECREMENT2:
            return {...state, count2: state.count2 - 1};
        default:
            return state;
    }
};
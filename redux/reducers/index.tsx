import { combineReducers } from 'redux';

const initState = {};

const profile = (state = initState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    profile,
});

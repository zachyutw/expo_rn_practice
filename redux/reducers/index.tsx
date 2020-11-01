import { combineReducers } from 'redux';
import counter from '../slices/counterSlice';
import product from '../slices/productSlice';
const initState = {};

const profile = (state = initState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    profile,
    counter,
    product,
});

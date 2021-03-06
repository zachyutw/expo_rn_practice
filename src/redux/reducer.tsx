import { combineReducers } from 'redux';
import counter from './slices/counterSlice';
import product from './slices/productSlice';
import authorization from './slices/authorizationSlice';
import user from './slices/userSlice';
import room from './slices/roomSlice';
import booking from './slices/bookingSlice';
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
    authorization,
    user,
    room,
    booking,
});

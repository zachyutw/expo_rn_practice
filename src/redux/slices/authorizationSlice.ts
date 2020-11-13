import {
    createAsyncThunk,
    createSlice,
    SerializedError,
} from '@reduxjs/toolkit';
import firebase from 'firebase';
// import 'firebase/firestore';

// First, create the thunk

export const createUserByEmailPasswordThunk = createAsyncThunk(
    'authorization/createUserByEmailPasswordThunk',
    async (params: any) => {
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(params.email, params.password)
                .then(() => {
                    firebase
                        .auth()
                        .currentUser?.sendEmailVerification()
                        .then(() => {
                            console.log('sent email');
                        });
                });

            return {};
        } catch (err) {
            throw err;
        }
    }
);

export const signInWithEmailAndPasswordThunk = createAsyncThunk(
    'authorization/signInWithEmailAndPasswordThunk',
    async ({ email, password }: any) => {
        try {
            return await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);
        } catch (err) {
            throw err;
        }
    }
);

export const signOutThunk = createAsyncThunk(
    'authorization/signOutThunk',
    async () => {
        try {
            await firebase.auth().signOut();
            return {};
        } catch (err) {
            throw err;
        }
    }
);

interface authorizationState {
    loading: string;
    error: SerializedError;
    credit: any;
}

const initialState: authorizationState = {
    credit: {},
    loading: 'init',
    error: {},
};

const thunkFulfilled = (state, action) => {
    // Add user to the state array
    state.credit = action.payload;
    state.loading = 'fulfilled';
};

const thunkPending = (state) => {
    state.loading = 'pending';
    state.error = {};
};

const thunkRejected = (state, action) => {
    state.loading = 'rejected';
    state.error = action.error;
};

// Then, handle actions in your reducers:
const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [`${createUserByEmailPasswordThunk.fulfilled}`]: thunkFulfilled,
        [`${createUserByEmailPasswordThunk.pending}`]: thunkPending,
        [`${createUserByEmailPasswordThunk.rejected}`]: thunkRejected,
        [`${signInWithEmailAndPasswordThunk.fulfilled}`]: thunkFulfilled,
        [`${signInWithEmailAndPasswordThunk.pending}`]: thunkPending,
        [`${signInWithEmailAndPasswordThunk.rejected}`]: thunkRejected,
        [`${signOutThunk.fulfilled}`]: thunkFulfilled,
        [`${signOutThunk.pending}`]: thunkPending,
        [`${signOutThunk.rejected}`]: thunkRejected,
    },
});

export const actions = authorizationSlice.actions;
export default authorizationSlice.reducer;

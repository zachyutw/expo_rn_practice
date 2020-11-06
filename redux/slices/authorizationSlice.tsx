import {
    createAsyncThunk,
    createSlice,
    SerializedError,
} from '@reduxjs/toolkit';
import firebase from 'firebase';
// import 'firebase/firestore';

// First, create the thunk

export const createUserByEmailPassword = createAsyncThunk(
    'authorization/createUserByEmailPassword',
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

export const signInWithEmailAndPassword = createAsyncThunk(
    'authorization/signInWithEmailAndPassword',
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

export const signOut = createAsyncThunk('authorization/signOut', async () => {
    try {
        await firebase.auth().signOut();
        return {};
    } catch (err) {
        throw err;
    }
});

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
// Then, handle actions in your reducers:
const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [`${createUserByEmailPassword.fulfilled}`]: (state, action) => {
            // Add user to the state array
            state.credit = action.payload;
            state.loading = 'fulfilled';
        },
        [`${createUserByEmailPassword.pending}`]: (state) => {
            state.loading = 'pending';

            state.error = {};
        },
        [`${createUserByEmailPassword.rejected}`]: (state, action) => {
            state.loading = 'rejected';
            state.error = action.error;
        },
        [`${signInWithEmailAndPassword.fulfilled}`]: (state, action) => {
            // Add user to the state array
            state.credit = action.payload;
            state.loading = 'fulfilled';
        },
        [`${signInWithEmailAndPassword.pending}`]: (state, action) => {
            state.loading = 'pending';
            state.error = {};
        },
        [`${signInWithEmailAndPassword.rejected}`]: (state, action) => {
            state.loading = 'rejected';
            state.error = action.error;
        },
        [`${signOut.fulfilled}`]: (state) => {
            // Add user to the state array
            state.credit = {};
            state.loading = 'fulfilled';
        },
    },
});

export const actions = authorizationSlice.actions;
export default authorizationSlice.reducer;

import {
    createAsyncThunk,
    createSlice,
    SerializedError,
} from '@reduxjs/toolkit';
import { Platform } from 'react-native';
import firebase from 'firebase';
import { signOutThunk } from './authorizationSlice';
import uuid from 'uuid-random';
// import 'firebase/firestore';
// import 'firebase/database';
import 'firebase/auth';
// First, create the thunk

const readData = (uid: string, collectionName: string) => {
    return firebase
        .database()
        .ref(`/${collectionName}/` + uid)
        .once('value')
        .then((snapshot) => snapshot.val() || {});
};

const writeData = async (uid: string, collectionName: string, data) => {
    await firebase
        .database()
        .ref(`${collectionName}/` + uid)
        .set(data);
    return { message: 'success' };
};

const updateUserData = async (profile: any) => {
    const userData = await getCurrentUserData();
    await writeData(userData.uid, 'users', { ...userData, ...profile });
    return { ...userData, ...profile };
};

const getCurrentUser = () =>
    new Promise((resolve, reject) => {
        try {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error('user not found'));
                }
            });
        } catch (err) {
            reject(err);
        }
    });
const getCurrentUserData = async () => {
    const {
        displayName,
        phoneNumber,
        photoURL,
        uid,
    }: any = await getCurrentUser();
    const userData = await readData(uid, 'users');
    return { displayName, phoneNumber, photoURL, id: uid, uid, ...userData };
};

export const fetchCurrentUserThunk = createAsyncThunk(
    'user/fetchCurrentUserThunk',
    async () => {
        try {
            const user = await getCurrentUserData();
            return user;
        } catch (err) {
            throw err;
        }
    }
);

export const updateProfileThunk = createAsyncThunk(
    'user/updateProfileThunk',
    async (profile: any) => {
        try {
            await updateUserData(profile);
            const userData = await getCurrentUserData();
            return { ...userData };
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
);

const uploadAvatar = async (result) => {
    const { uid } = await firebase.auth().currentUser;
    const fileName = `images/${uid}/avatar.png`;
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(fileName);
    const response = await fetch(result.uri);
    const blob = await response.blob();
    const downLoadURL = await imageRef.put(blob).then(async () => {
        console.log('upload file to success');
        return await imageRef.getDownloadURL();
    });

    await updateUserData({ photoURL: downLoadURL });
    return { photoURL: downLoadURL };
};

export const updateAvatarThunk = createAsyncThunk(
    'user/updateAvatarThunk',
    async (result: any) => {
        try {
            // upload avatar image to firebase storage
            await uploadAvatar(result);
            const userData = await getCurrentUserData();
            return { ...userData };
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
);

interface userState {
    loading: string;
    error: SerializedError;
    data: any;
}

const initialState: userState = {
    data: {},
    loading: 'init',
    error: {},
};

const thunkFulfilled = (state, action) => {
    // Add user to the state array
    state.data = action.payload;
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
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [`${fetchCurrentUserThunk.fulfilled}`]: thunkFulfilled,
        [`${fetchCurrentUserThunk.pending}`]: thunkPending,
        [`${fetchCurrentUserThunk.rejected}`]: thunkRejected,
        [`${updateProfileThunk.fulfilled}`]: thunkFulfilled,
        [`${updateProfileThunk.pending}`]: thunkPending,
        [`${updateProfileThunk.rejected}`]: thunkRejected,
        [`${updateAvatarThunk.fulfilled}`]: thunkFulfilled,
        [`${updateAvatarThunk.pending}`]: thunkPending,
        [`${updateAvatarThunk.rejected}`]: thunkRejected,
        [`${signOutThunk.fulfilled}`]: (state) => {
            state.data = {};
        },
    },
});

export const actions = userSlice.actions;
export default userSlice.reducer;

import {
    createAsyncThunk,
    createSlice,
    SerializedError,
} from '@reduxjs/toolkit';
import { Platform } from 'react-native';
import firebase from 'firebase';
import { v4 } from 'uuid';
import 'firebase/firestore';
import 'firebase/database';
// First, create the thunk
import uuid from 'uuid-random';
const getUserInfoIn = (user) => {
    try {
        return { ...user, ...JSON.parse(user.displayName) };
    } catch (err) {
        console.log(err);
        return { ...user };
    }
};

export const fetchCurrentUser = createAsyncThunk(
    'user/fetchCurrentUser',
    async () => {
        try {
            const user = await firebase.auth().currentUser;
            if (user) {
                // console.log(user);
                return getUserInfoIn(user);
            } else {
                throw new Error(' No user is signed in');
            }
        } catch (err) {
            throw err;
        }
    }
);

export const updateProfile = createAsyncThunk(
    'user/updateProfile',
    async (userInfo) => {
        const currentUser = await firebase.auth().currentUser;
        try {
            // console.log(currentUser);
            let resp = {};
            firebase.auth().onAuthStateChanged(async (user) => {
                if (user) {
                    await user
                        .updateProfile({ displayName: '123' })
                        .then(async () => {
                            console.log(
                                await firebase.auth().currentUser.displayName
                            );
                        });
                }
            });
            // await firebase
            //     .firestore()
            //     .collection('users')
            //     .doc('one')
            //     .set({ authId: user?.uid, ...userInfo })
            //     .then(() => console.log('success'));

            return resp;
            // return {};
        } catch (err) {
            // console.log(user);
            console.log(err);
            throw err;
        }
    }
);

// export const updateAvatar = createAsyncThunk(
//     'user/updateAvatar',
//     async (result: any) => {
//         try {
//             // upload avatar image to firebase storage
//             const fileName = `images/${uuid()}.png`;
//             const storageRef = firebase.storage().ref();
//             const imageRef = storageRef.child(fileName);
//             const response = await fetch(result.uri);
//             const blob = await response.blob();
//             const downLoadURL = await imageRef
//                 .put(blob)
//                 .then(async () => {
//                     console.log('upload file to success');
//                     return await imageRef.getDownloadURL();
//                 })
//                 .catch((err) => console.log(err));

//             // update user avatar
//             const user = await firebase.auth().currentUser;
//             if (user) {
//                 return await user
//                     .updateProfile({ photoURL: 'test1' })
//                     .then(async () => {
//                         const updatedUser = await firebase.auth().currentUser;
//                         return getUserInfoIn(updatedUser);
//                     });
//             } else {
//                 throw new Error(' No user is signed in');
//             }
//         } catch (err) {
//             console.log(err);
//             throw err;
//         }
//     }
// );

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
// Then, handle actions in your reducers:
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [`${fetchCurrentUser.fulfilled}`]: (state, action) => {
            // Add user to the state array
            state.data = action.payload;
            state.loading = 'fulfilled';
        },
        [`${fetchCurrentUser.pending}`]: (state) => {
            state.loading = 'pending';
            state.error = {};
        },
        [`${fetchCurrentUser.rejected}`]: (state, action) => {
            state.loading = 'rejected';
            state.error = action.error;
        },
        [`${updateProfile.fulfilled}`]: (state, action) => {
            // Add user to the state array
            console.log('fulfilled');
            state.data = action.payload;
            state.loading = 'fulfilled';
        },
        [`${updateProfile.pending}`]: (state) => {
            state.loading = 'pending';
            console.log('pending');
            state.error = {};
        },
        [`${updateProfile.rejected}`]: (state, action) => {
            state.loading = 'rejected';
            console.log('12rejected3');
            state.error = action.error;
        },
        // [`${updateAvatar.fulfilled}`]: (state, action) => {
        //     // Add user to the state array
        //     state.data = action.payload;
        //     state.loading = 'fulfilled';
        // },
        // [`${updateAvatar.pending}`]: (state) => {
        //     state.loading = 'pending';
        //     state.error = {};
        // },
        // [`${updateAvatar.rejected}`]: (state, action) => {
        //     state.loading = 'rejected';
        //     state.error = action.error;
        // },
    },
});

export const actions = userSlice.actions;
export default userSlice.reducer;

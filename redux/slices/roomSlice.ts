import rooms from '../../assets/data/rooms.json';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export type Room = {
    id: string;
    hostBy: string;
    displayName: string;
    imageUrls: Array<string>;
    cover: string;
    bed: string;
    colors: Array<string>;
    currency: string;
    price: string;
    description: string;
    people: number;
};

const fetchRooms = async (params: any) => {
    await sleep(300);
    // console.log(params);
    return new Promise((resolve) => {
        resolve({
            data: rooms as Array<Room>,
            message: 'success',
        });
    });
};

// First, create the thunk
export const fetchRoomsThunk = createAsyncThunk(
    'rooms/fetchRooms',
    async (params: any, thunkAPI) => {
        try {
            const response: any = await fetchRooms(params);
            return response.data;
        } catch (err) {
            thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

type RoomInitialState = {
    entities: Array<Room>;
    loading: 'init' | 'fulfilled' | 'pending' | 'rejected';
};

const initialState = { entities: [], loading: 'init' } as RoomInitialState;

// Then, handle actions in your reducers:
const slice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [`${fetchRoomsThunk.fulfilled}`]: (state, action) => {
            // Add user to the state array
            state.entities = action.payload;
            state.loading = 'fulfilled';
        },
        [`${fetchRoomsThunk.pending}`]: (state) => {
            state.loading = 'pending';
        },
        [`${fetchRoomsThunk.rejected}`]: (state) => {
            state.loading = 'rejected';
        },
    },
});

export const actions = slice.actions;
export default slice.reducer;

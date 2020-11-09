import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import icsToJson from 'ics-to-json';
import moment from 'moment';

const icsUrl =
    'https://calendar.google.com/calendar/ical/u8uf8b1kkm1838t01gr8eavs6c%40group.calendar.google.com/private-0f78d7bb44899f8115a1574ce7af2f35/basic.ics';

export const fetchEventsFromGoogleCalendar = () => {
    return axios.get(icsUrl).then((result) => {
        try {
            return icsToJson(result.data as Array<Event>).map(
                ({ startDate, endDate, ...rest }) => ({
                    startDate: moment(startDate, 'YYYYMMDDThhmmss').format(
                        'MM/DD/yyyy'
                    ),
                    endDate: moment(startDate, 'YYYYMMDDThhmmss').format(
                        'MM/DD/yyyy'
                    ),
                    ...rest,
                })
            );
        } catch (err) {
            console.log(err);
        }
    });
};

export type Event = {
    description: string;
    endDate: string;
    location: string;
    startDate: string;
    summary: string;
};

// First, create the thunk
export const fetchEventsThunk = createAsyncThunk(
    'booking/fetchEvents',
    async (_, thunkAPI) => {
        try {
            const events: Array<Event> = await fetchEventsFromGoogleCalendar();
            return events;
        } catch (err) {
            thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

type EventInitialState = {
    entities: Array<Event>;
    loading: 'init' | 'fulfilled' | 'pending' | 'rejected';
};

const initialState = { entities: [], loading: 'init' } as EventInitialState;

// Then, handle actions in your reducers:
const slice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [`${fetchEventsThunk.fulfilled}`]: (state, action) => {
            // Add user to the state array
            state.entities = action.payload;
            state.loading = 'fulfilled';
        },
        [`${fetchEventsThunk.pending}`]: (state) => {
            state.loading = 'pending';
        },
        [`${fetchEventsThunk.rejected}`]: (state) => {
            state.loading = 'rejected';
        },
    },
});

export const actions = slice.actions;
export default slice.reducer;

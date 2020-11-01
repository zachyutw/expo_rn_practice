import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productsApi from '../../apis/productsApi';

// First, create the thunk
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (params: any, thunkAPI) => {
        try {
            const response: any = await productsApi.fetchProducts(params);
            return response.data;
        } catch (err) {
            thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

// Then, handle actions in your reducers:
const productSlice = createSlice({
    name: 'users',
    initialState: { entities: [], loading: 'init' },
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [fetchProducts.fulfilled]: (state, action) => {
            // Add user to the state array
            state.entities = action.payload;
            state.loading = 'fulfilled';
        },
        [fetchProducts.pending]: (state) => {
            state.loading = 'pending';
        },
        [fetchProducts.rejected]: (state) => {
            state.loading = 'rejected';
        },
    },
});

export const actions = productSlice.actions;
export default productSlice.reducer;

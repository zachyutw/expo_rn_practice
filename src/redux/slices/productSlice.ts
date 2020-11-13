import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productsApi, { Product } from '../../apis/productsApi';

// First, create the thunk
export const fetchProductsThunk = createAsyncThunk(
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

type ProductInitialState = {
    entities: Array<Product>;
    loading: 'init' | 'fulfilled' | 'pending' | 'rejected';
};

const initialState = { entities: [], loading: 'init' } as ProductInitialState;

// Then, handle actions in your reducers:
const productSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [`${fetchProductsThunk.fulfilled}`]: (state, action) => {
            // Add user to the state array
            state.entities = action.payload;
            state.loading = 'fulfilled';
        },
        [`${fetchProductsThunk.pending}`]: (state) => {
            state.loading = 'pending';
        },
        [`${fetchProductsThunk.rejected}`]: (state) => {
            state.loading = 'rejected';
        },
    },
});

export const actions = productSlice.actions;
export default productSlice.reducer;

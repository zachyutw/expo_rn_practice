export const thunkStatusCase = {
    fulfilled: (state, action) => {
        // Add user to the state array
        state.entities = action.payload;
        state.loading = 'fulfilled';
    },
    pending: (state) => {
        state.loading = 'pending';
        state.error = {};
    },
    rejected: (state, action) => {
        state.loading = 'rejected';
        state.error = action.error;
    },
};

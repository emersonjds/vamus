import { configureStore } from '@reduxjs/toolkit';

import tripReducer from '../redux/slices/tripSlice';

export const store = configureStore({
    reducer: {
        trip: tripReducer,
    },
});

export default store;


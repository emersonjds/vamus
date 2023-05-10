import { createSlice } from '@reduxjs/toolkit';

interface tripState {
    trip: [],
}

const slice = createSlice({
    name: 'trip',
    initialState: {
        trip: [],
    } as tripState,
    reducers: {},
});

export const { } = slice.actions;

export const tripSelector = (state: { trip: any }) => state.trip;

export default slice.reducer;

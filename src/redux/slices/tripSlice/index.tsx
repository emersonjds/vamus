import { createSlice } from '@reduxjs/toolkit';

interface tripState {
  trips: [],
}

export const slice = createSlice({
  name: 'trip',
  initialState: {
    trips: [],
  } as tripState,
  reducers: {
    //@ts-ignore
    addNewTrip: (state, { payload }) => {
      return {
        ...state,
        trip: [...state.trips, payload],
      }
    }
  }
});

export const {
  addNewTrip,
} = slice.actions;

export const tripSelector = (state: { trip: any }) => state.trip;

export default slice.reducer;

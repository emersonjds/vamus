import { createSlice } from '@reduxjs/toolkit';

interface tripState {
  trips: [],
  travels: [
    {
      id: number,
      title: string,
      uri: string,
      views: number,
      pp: string,
      onPress: () => void,
      country: string,
      icon: string
    }
  ]
}

export const slice = createSlice({
  name: 'trip',
  initialState: {
    trips: [],
    travels: [
      {
        id: 1,
        title: 'Role de Rodas - Recife - PE',
        uri: 'https://i2.wp.com/blog.123milhas.com/wp-content/uploads/2019/10/2-Recife-1.jpeg?fit=1024%2C682&ssl=1',
        views: 90,
        pp: 'R$ 1.500,00',
        onPress: () => { },
        country: 'Brasil',
        icon: ''
      }
    ]
  } as unknown as tripState,
  reducers: {
    //@ts-ignore
    addNewTrip: (state, { payload }) => {
      return {
        ...state,
        trip: [...state.travels, payload],
      }
    }
  }
});

export const {
  addNewTrip,
} = slice.actions;

export const tripSelector = (state: { trip: any }) => state.trip;

export default slice.reducer;

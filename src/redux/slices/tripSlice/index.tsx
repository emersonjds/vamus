import { FontAwesome } from '@expo/vector-icons';
import { createSlice } from '@reduxjs/toolkit';

interface Travel {
  id: number,
  title: string,
  uri: string,
  views: number,
  pp: string,
  onPress: () => void,
  country: string,
  icon: string | JSX.Element,
}

interface tripState {
  trips: [],
  travels: Travel[],
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
        icon: <FontAwesome name="heart" size={24} color="black" />
      },
      {
        id: 2,
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
        travels: [...state.travels, payload],
      }
    }
  }
});

export const {
  addNewTrip,
} = slice.actions;

export const tripSelector = (state: { trip: any }) => state.trip;

export default slice.reducer;

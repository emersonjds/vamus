import React, { FC, useCallback, useEffect } from 'react';
import { Box } from '../../components/Spacing';
import CardTrip from '../../components/CardTrip';

import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen: FC = () => {

  return (
    <>
      <Box flex={1} mt={20} >
        <CardTrip />
      </Box>
    </>
  );
}

export default HomeScreen;
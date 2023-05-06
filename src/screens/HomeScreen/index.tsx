import React, { FC } from 'react';
import { Box } from '../../components/Spacing';
import CardTrip from '../../components/CardTrip';

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
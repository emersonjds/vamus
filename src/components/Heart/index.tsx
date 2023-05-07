import React from 'react';
import { Box } from '../Spacing';
import { AntDesign } from '@expo/vector-icons';

const Heart: React.FC = () => {
  return (
    <>
      <Box
      >
        <AntDesign name="hearto" size={24} color="red" />
      </Box>
    </>
  );
}

export default Heart;
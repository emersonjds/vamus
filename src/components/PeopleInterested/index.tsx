import React, { FC } from 'react';
import { Box } from '../Spacing';
import { Text } from 'react-native';

const PeopleInterested: FC = () => {
  return (
    <>
      <Box
        position="absolute"
        top={-100}
        left={280}
        right={0}
        bottom={0}
        zIndex={1}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 20,
          }}
        >
          14/20
        </Text>
      </Box>
    </>
  );
}

export default PeopleInterested;
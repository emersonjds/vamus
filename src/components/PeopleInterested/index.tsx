import React, { FC } from 'react';
import { Box } from '../Spacing';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PeopleInterested: FC = () => {
  return (
    <>
      <Box
        position="absolute"
        top={-150}
        left={260}
        right={0}
        bottom={0}
        zIndex={1}
        flexDirection="row"
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
        <Ionicons name="people" size={24} color="white"
          style={{
            marginLeft: 5,
          }}
        />

      </Box>
    </>
  );
}

export default PeopleInterested;
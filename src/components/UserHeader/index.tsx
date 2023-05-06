import React from 'react';
import { Box } from '../Spacing';
import { Title } from 'react-native-paper';

const UserHeader: React.FC = () => {
  return (
    <>
      <Box
        ml={10}
        mb={20}
        mt={20}
      >
        <Title
          style={{
            fontWeight: 'bold',
          }}
        >
          Bem-vindo, Emerson
        </Title>
      </Box>
    </>
  );
}

export default UserHeader;
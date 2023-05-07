import React from 'react';
import { Box, Container } from '../../components/Spacing';
import { Text } from 'react-native-paper';

const MyTravel: React.FC = () => {
  return (
    <>
      <Container>
        <Box>
          <Text variant="titleLarge">Locais ja visitados</Text>
        </Box>
      </Container>
    </>
  );
}

export default MyTravel;
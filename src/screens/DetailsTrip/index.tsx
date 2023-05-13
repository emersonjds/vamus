import { useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { Divider, Text } from 'react-native-paper';
import { Box, Container } from '../../components/Spacing';
import { Image } from 'react-native';
import { Avatar } from 'react-native-paper';

const DetailsTrip: FC = () => {
  const route = useRoute();
  const { id, title, uri, views, pp, icon } = route.params;

  return (
    <>
      <Box
        height={300}
        width="100%"
      >
        <Image
          style={{
            height: '100%',
            width: '100%'
          }}
          resizeMode='contain'
          source={{ uri: uri }}
        />
      </Box>

      <Container
        style={{
          marginTop: 0
        }}
      >
        <Box>
          <Box>
            <Text variant='headlineLarge'>
              Detalhes dessa Trip
            </Text>
          </Box>
          <Box>
            <Box
              flexDirection="row"
            >
              <Avatar.Image size={24} source={require('../../assets/1.png')} />
              <Avatar.Image size={24} source={require('../../assets/2.png')} />
              <Avatar.Image size={24} source={require('../../assets/dru.jpeg')} />
              <Avatar.Image size={24} source={require('../../assets/alba.jpeg')} />
            </Box>
            <Text variant='labelLarge'>
              14 de 20 pessoas ja fecharam essa trip
            </Text>
          </Box>
          <Box>
            <Text variant='labelLarge'>
              Destino: {title}
            </Text>
          </Box>
          <Box>
            <Text variant='labelLarge'>
              Há&nbsp;
              {views} pessoas interessadas nessa viagem
            </Text>
          </Box>
          <Box>
            <Text variant='labelLarge'>
              Valor por pessoa {pp}
            </Text>
          </Box>
        </Box>
        <Box
          mt={10}
          mb={10}
        >
          <Divider />
        </Box>
        <Box>
          <Text>
            Observações:
          </Text>
          <Text>
            Essa viagem contempla acessibilidade e cuidados para pessoas especiais
          </Text>
        </Box>


      </Container >
    </>
  );
}

export default DetailsTrip;
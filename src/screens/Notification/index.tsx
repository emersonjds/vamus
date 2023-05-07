import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Box } from '../../components/Spacing';
import { Divider, Text } from 'react-native-paper';

import { Container } from '../../components/Spacing';


const Notification: React.FC = () => {

  return (
    <>
      <Container>
        <Text variant="titleLarge">Notificações</Text>
        <Text
          variant='titleMedium'
        >
          Aqui voce acompanha o andamento das suas viagens, interesses, trips fechadas e desistencias
        </Text>
        <Box
          mt={10}
        >
          <Divider />
        </Box>
        <Box
          width="100%"
          // bg="red"
          flexDirection="row"
          justifyContent="space-between"
          borderRadius={5}
          mt={10}
          borderWidth={1}
          padding={2}
          height={80}
        >
          <Box
            width="20%"
            // height={52}/
            borderRadius={5}
            borderWidth={1}
          >
            <Image
              style={{ width: '100%', height: '100%' }}
              source={require('../../assets/logo/logo-copa.jpeg')}
              resizeMode='contain'
            />
          </Box>
          <Box
            width="75%"
            position="relative"
          >
            <Box
              width="100%"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Text
                variant='titleMedium'
              >
                Viagem - Spectrum - Espanha
              </Text>
              <Text>
                23/04
              </Text>
            </Box>
            <Box
              flexDirection="row"
              alignItems="center"
            >
              <Box
                width="90%"
              >
                <Text>
                  A empresa Copastur esta analisando essa viagem e logo entrara em contato
                </Text>
              </Box>

              <Box
                width="10%"
              >
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require('../../assets/autismo.jpeg')}
                  resizeMode='contain'
                />
              </Box>
            </Box>
          </Box>
          {/* Icon */}
        </Box>



      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16
  },
  timeText: {
    width: 80,
    marginRight: 16,
    color: 'gray'
  },
  descriptionText: {
    flex: 1,
    color: 'black'
  }
});

export default Notification;
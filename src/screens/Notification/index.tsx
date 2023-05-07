import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Box } from '../../components/Spacing';
import { Divider, Text } from 'react-native-paper';
import { ScreenContainer } from 'react-native-screens';
import { Container } from '../../components/Spacing';
import Timeline from 'react-native-timeline-flatlist';


const Notification: React.FC = () => {

  return (
    <>
      <Container>

        <Text
          variant="titleLarge"
        >Notificações</Text>
        <Text>
          Aqui voce acompanha o andamento das suas viagens, interesses, trips fechadas e desistencias
        </Text>

        <Box
          mt={10}
        >
          <Divider />
        </Box>

        <Box
          width="100%"
          height={52}
          bg="red"
          flexDirection="row"
        >
          <Box
            width="20%"
            height={52}
          >
            <Text>
              Imagem
            </Text>
          </Box>

          <Box
            width="75%"
            height={52}
          >

            <Box
              width="100%"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Text>
                Nome da Trip
              </Text>
              <Text>
                Data da Trip
              </Text>
            </Box>

            <Box>
              <Text>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
              </Text>
            </Box>


          </Box>

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
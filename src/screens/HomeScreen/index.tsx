import React, { FC } from 'react';
import { Box } from '../../components/Spacing';
import CardTrip from '../../components/CardTrip';
import UserHeader from '../../components/UserHeader';
import { ScrollView, Touchable, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import TitleTrip from '../../components/TitleTrip';

const travels = [
  {
    id: 1,
    title: 'S. Francisco - EUA',
    uri: 'https://www.segurospromo.com.br/blog/wp-content/uploads/2020/10/sao-francisco-capa-750x360.jpg'
  },
  {
    id: 2,
    title: 'Salvador - BA',
    uri: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg'
  },
  {
    id: 3,
    title: 'Gramado - RS',
    uri: 'https://cdn2.revistahoteis.com.br/wp-content/uploads/2023/02/Gramado.jpg'
  }
]

const HomeScreen: FC = () => {

  return (
    <>
      <Box flex={1} mt={20} >

        {/* #HEADER */}
        <Box ml={10}>
          <UserHeader />
        </Box>
        {/* #HEADER */}
        <Divider />

        <Box>
          <TitleTrip />
        </Box>

        <Box
          mt={10}
          mb={10}
        >
          <Divider />
        </Box>


        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          {
            travels.map((travel) => (

              <CardTrip
                key={travel.id}
                uri={travel.uri}
                title={travel.title}
              />


            ))
          }



        </ScrollView>

      </Box>
    </>
  );
}

export default HomeScreen;
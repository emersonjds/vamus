import React, { FC } from 'react';
import { Box } from '../../components/Spacing';
import CardTrip from '../../components/CardTrip';
import UserHeader from '../../components/UserHeader';
import { ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import TitleTrip from '../../components/TitleTrip';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen: FC = () => {
  const navigate = useNavigation();

  const travels = [
    {
      id: 1,
      title: 'Role de Rodas - Recife - PE',
      uri: 'https://i2.wp.com/blog.123milhas.com/wp-content/uploads/2019/10/2-Recife-1.jpeg?fit=1024%2C682&ssl=1',
      views: 90,
      pp: 'R$ 1.500,00',
      onPress: () => { },
      icon: <FontAwesome name="wheelchair-alt" size={24} color="white"
        style={{
          marginRight: 5,
        }}
      />
    },
    {
      id: 2,
      title: 'Salvador - BA',
      uri: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg',
    },
    {
      id: 3,
      title: 'Gramado - RS',
      uri: 'https://cdn2.revistahoteis.com.br/wp-content/uploads/2023/02/Gramado.jpg'
    }
  ]
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
                views={travel.views}
                pp={travel.pp}
                onPress={() => navigate.navigate('DetailsTrip', { ...travel })}
                icon={travel.icon} />
            ))
          }
        </ScrollView>
      </Box>
    </>
  );
}

export default HomeScreen;
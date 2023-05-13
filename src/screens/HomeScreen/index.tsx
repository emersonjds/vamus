import React, { FC } from 'react';
import { Box } from '../../components/Spacing';
import CardTrip from '../../components/CardTrip';
import UserHeader from '../../components/UserHeader';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import TitleTrip from '../../components/TitleTrip';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { fontWeight } from 'styled-system';
import { useSelector } from 'react-redux';
import tripSlice, { tripSelector } from '../../redux/slices/tripSlice';

const HomeScreen: FC = () => {
  const navigate = useNavigation();
  const selector = (state: any) => state.user;

  const [visible, setVisible] = React.useState(true);
  const { travels } = useSelector(tripSelector);

  return (
    <>
      <Box mt={20} >

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
                icon={travel.icon}
                country={travel.country}
              />
            ))
          }
        </ScrollView>

        <Box
          mt={20}
          mb={20}
        >
          <Divider />
        </Box>

        <Box
          width={'100%'}
          alignItems={'center'}
        >
          <TouchableOpacity
            onPress={() => {
              navigate.navigate('Proposal');
            }}

            style={{
              height: 60,
              padding: 10,
              backgroundColor: 'purple',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              variant='titleMedium'
              style={{
                color: '#fff'
              }}
            >
              Eai,
              vamus
              pra onde ?!
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </>
  );
}

export default HomeScreen;
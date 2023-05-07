import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box } from '../Spacing';
import { Button, Divider, Text } from 'react-native-paper';
import * as S from './styles';
import UserHeader from '../UserHeader';
import TitleTrip from '../TitleTrip';
import { Card } from 'react-native-paper';

import Heart from '../Heart';
import PeopleInterested from '../PeopleInterested';
import Colors from '../Constants';
import HeaderCard from '../HeaderCard';


const CardTrip: React.FC = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {/* #HEADER */}
        <Box ml={10}>
          <UserHeader />
        </Box>
        {/* #HEADER */}

        <Divider />

        <Box>
          <TitleTrip />
        </Box>

        <Box>
          <S.ScrollTrips
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Box
              style={{
                width: '100%',
              }}
            >
              <Card
                style={{
                  borderColor: `${Colors.gray}`,
                  borderWidth: 0.3,
                }}
              >
                <Card.Cover source={{ uri: 'https://www.segurospromo.com.br/blog/wp-content/uploads/2020/10/sao-francisco-capa-750x360.jpg' }}
                  style={{
                    width: 350,
                    borderRadius: 0,
                  }}
                />
                <Card.Content>
                  <Text variant="titleLarge">Card title</Text>
                  <Text variant="bodyMedium">Card content</Text>
                </Card.Content>

                <HeaderCard
                  title="S. Francisco - EUA"
                />
                <PeopleInterested />
              </Card>
            </Box>
          </S.ScrollTrips>
        </Box>
      </SafeAreaView >
    </>
  )

}

export default CardTrip;
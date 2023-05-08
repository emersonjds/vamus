import React, { FC } from 'react';
import { Box } from '../Spacing';
import { Text, Card } from 'react-native-paper';
import PeopleInterested from '../PeopleInterested';
import HeaderCard from '../HeaderCard';
import { Entypo, Ionicons } from '@expo/vector-icons';


interface CardTripProps {
  uri?: string;
  title?: string;
  views?: number;
  pp?: string;
  onPress?: () => void;
  icon?: any;
  country?: string;
}

const CardTrip: FC<CardTripProps> = ({
  uri,
  title,
  views,
  pp,
  onPress,
  icon,
  country,
}) => {
  return (
    <>
      <Box
        style={{
          flex: 1,
          marginLeft: 15,
        }}>
        <Card
          style={{
            height: 280,
          }}
          onPress={onPress}
        >
          <Card.Cover source={{ uri: uri }}
            style={{
              width: 350,
              borderRadius: 0,
            }}
          />
          <Card.Content>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              mt={10}
            >
              <Text variant="bodyLarge">Visualizações</Text>
              <Box
                flexDirection="row"
                alignItems="center"
              >
                <Entypo name="eye" size={24} color="black"
                  style={{
                    marginRight: 5,
                  }}
                />
                <Text>
                  {views}
                </Text>
              </Box>
            </Box>
          </Card.Content>

          <Card.Content>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              mt={10}
            >
              <Box
                flexDirection="row"
                alignItems="center"
              >
                <Ionicons name="location-outline" size={24} color="black"
                  style={{
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    color: '#000'
                  }}
                >
                  {/* Estados Unidos */}
                  {country}
                </Text>
              </Box>
              <Box
                flexDirection="row"
                alignItems="center"
              >
                <Text>
                  {pp} &nbsp;
                </Text>
              </Box>
            </Box>
          </Card.Content>
          <HeaderCard
            title={title}
          />
          <PeopleInterested />
          <Box
            position="absolute"
            top={-210}
            left={310}
            right={0}
            bottom={0}
            zIndex={1}
            flexDirection="row"
          >
            {
              icon
            }
          </Box>
        </Card>
      </Box>
    </>
  )

}

export default CardTrip;
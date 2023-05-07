import React, { FC } from 'react';
import { Box } from '../Spacing';
import { Text, Card } from 'react-native-paper';
import PeopleInterested from '../PeopleInterested';
import HeaderCard from '../HeaderCard';
import Colors from '../Constants';


interface CardTripProps {
  uri?: string;
  title?: string;
}

const CardTrip: FC<CardTripProps> = ({
  uri,
  title,
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
            borderColor: `${Colors.gray}`,
            borderWidth: 0.3,
          }}
        >
          <Card.Cover source={{ uri: uri }}
            style={{
              width: 350,
              borderRadius: 0,
            }}
          />
          <Card.Content>
            <Box>
              <Text variant="bodyMedium">Card content</Text>
            </Box>
          </Card.Content>
          <HeaderCard
            title={title}
          />
          <PeopleInterested />
        </Card>
      </Box>
    </>
  )

}

export default CardTrip;
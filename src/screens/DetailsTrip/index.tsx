import { useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text } from 'react-native-paper';
import { Box } from '../../components/Spacing';

const DetailsTrip: FC = () => {
  const route = useRoute();
  const { id, title, uri, views, pp } = route.params;

  return (
    <>
      <Box
        style={{
          flex: 1,
          marginLeft: 15,
          marginTop: 40,
        }}
      >
        {
          <Text>
            {title}
          </Text>
        }
        {
          <Text>
            {uri}
          </Text>
        }
        {
          <Text>
            {views}
          </Text>
        }
        {
          <Text>
            {pp}
          </Text>
        }
        {
          <Text>
            {id}
          </Text>
        }
      </Box>

    </>
  );
}

export default DetailsTrip;
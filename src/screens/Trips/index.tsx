import React from 'react';
import { Image, ScrollView } from 'react-native';
import { Box, Container } from '../../components/Spacing';
import { Divider, Text } from 'react-native-paper';

import { Searchbar } from 'react-native-paper';

const Trips: React.FC = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [value, setValue] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
      <Container
        style={{
          marginTop: 0,
        }}
      >
        <Box
          mt={30}
        >
          <Searchbar
            placeholder="Por qual tipo de trip voce se interessa"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </Box>

        <Box
          mt={10}
          mb={10}
        >
          <Divider />
        </Box>

        <ScrollView
          contentContainerStyle={{
            height: 250,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Box
            width={300}
            height={200}
            mr={15}
          >
            <Image
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 10
              }}
              source={require('../../assets/aventura.jpeg')}
              resizeMode='cover'
            />
            <Text
              variant="titleLarge"
            >
              Aventura
            </Text>

          </Box>
          <Box
            width={300}
            height={200}
            mr={15}
          >
            <Image
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 10
              }}
              source={require('../../assets/praia.webp')}
              resizeMode='cover'
            />
            <Text
              variant="titleLarge"
            >
              Lazer
            </Text>
          </Box>
          <Box
            width={300}
            height={200}
            mr={15}
          >
            <Image
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 10
              }}
              source={require('../../assets/museu.jpeg')}
              resizeMode='cover'
            />
            <Text
              variant="titleLarge"
            >
              Conhecimento
            </Text>
          </Box>
        </ScrollView>

        <Box
          flex={1}
          mt={-250}
        >
          <Text variant='titleSmall'
          >
            Minhas Ultimas viagens
          </Text>
        </Box>
      </Container>

    </>
  )
}

export default Trips;
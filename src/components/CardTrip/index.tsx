import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Box } from '../Spacing';
import { Divider } from 'react-native-paper';
import Colors from '../Constants';
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import * as S from './styles';
import UserHeader from '../UserHeader';
import TitleTrip from '../TitleTrip';

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

        <View>
          <S.ScrollTrips
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                height: 250,
                width: 250,
                borderWidth: 2,
                borderColor: `${Colors.light_gray}`,
                marginRight: 10,
                borderRadius: 10,
              }}>
              <Box
                height={'70%'}
                width={'100%'}
              >
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                  source={require('../../assets/sf.jpeg')}
                  resizeMode='stretch'

                />
                <Box
                  position="absolute"
                  top={-150}
                  left={200}
                  right={0}
                  bottom={0}
                >
                  <AntDesign name="hearto" size={24} color="white" />
                </Box>

                <Box
                  position="absolute"
                  top={-50}
                  left={190}
                  right={0}
                  bottom={0}
                >
                  <Text
                    style={{
                      color: `${Colors.white}`,
                      fontWeight: 'bold',
                    }}
                  >
                    14/20
                  </Text>
                </Box>
              </Box>
              <Box
                mt={10}
                ml={10}
              >
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text>
                    São Paulo
                  </Text>
                  <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    width={55}
                    alignItems="center"
                  >
                    <Entypo name="eye" size={24} color="black" />
                    <Text
                      style={{
                        marginRight: 5,
                      }}
                    >
                      98
                    </Text>
                  </Box>
                </Box>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  mt={10}
                >
                  <Box
                    flexDirection="row"
                  >
                    <EvilIcons name="location" size={24} color="black" />
                    <Text>
                      U.S
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      style={{
                        marginRight: 5,
                      }}
                    >
                      P/P R$ 1.000,00
                    </Text>
                  </Box>
                </Box>
              </Box>
            </View>
          </S.ScrollTrips>
        </View>
      </SafeAreaView >
    </>
  )

}

export default CardTrip;
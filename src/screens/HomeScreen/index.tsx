import React, { FC } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, Title } from 'react-native-paper';
import { useTheme } from 'styled-components';
import Colors from '../../components/Constants';
import { Box } from '../../components/Spacing';
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';


// import { Container } from './styles';

const HomeScreen: FC = () => {

    const theme = useTheme();
    return (
        <>
            <SafeAreaView
                style={{
                    flex: 1,
                }}
            >
                <Box
                    ml={10}
                    mb={20}
                >
                    <Title
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        Bem vindo, Emerson
                    </Title>
                </Box>


                <Divider />


                <View
                    style={{
                        marginTop: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20
                    }}
                >
                    <TouchableOpacity
                        style={{
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: '#000',
                            padding: 20
                        }}
                    >
                        <Text
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            Iai Vamos pra onde !?
                        </Text>
                    </TouchableOpacity>
                </View>

                <Divider />

                <Box
                    ml={20} mt={20}>
                    <Title>
                        Trips mais visitadas
                    </Title>
                </Box>


                <View

                >
                    <ScrollView
                        style={{
                            width: '100%',
                            marginHorizontal: 20,
                            paddingVertical: 20,
                        }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <View
                            style={{
                                height: 250,
                                width: 200,
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
                                    left={160}
                                    right={0}
                                    bottom={0}
                                >
                                    <AntDesign name="hearto" size={24} color="white" />
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
                                        width={50}
                                        alignItems="center"
                                    >
                                        <Entypo name="eye" size={24} color="black" />
                                        <Text>
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
                                        <Text>
                                            P/P R$ 1.000,00
                                        </Text>
                                    </Box>

                                </Box>


                            </Box>
                        </View>
                    </ScrollView>
                </View>



            </SafeAreaView>
        </>
    );
}

export default HomeScreen;
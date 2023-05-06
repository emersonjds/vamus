import React, { FC } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, Title } from 'react-native-paper';
import { useTheme } from 'styled-components';
import Colors from '../../components/Constants';
import { Box } from '../../components/Spacing';
import { AntDesign, FontAwesome } from '@expo/vector-icons';


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


                <View
                    style={{

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
                            paddingHorizontal: 20,
                            marginHorizontal: 20,
                            paddingVertical: 20,
                        }}
                        horizontal
                    >
                        <View
                            style={{
                                height: 140,
                                width: 150,
                                borderWidth: 2,
                                borderColor: `${Colors.light_gray}`,
                                marginRight: 10,
                                borderRadius: 10,
                            }}>
                            <Box
                                justifyContent="flex-end"
                                alignItems="flex-end"
                            >
                                <Box
                                    position="absolute"
                                    top={15}
                                    left={0}
                                    right={0}
                                    bottom={0}
                                    height={35}
                                    width={35}
                                >
                                    <AntDesign name="hearto" size={24} color="black" />
                                </Box>
                            </Box>

                        </View>

                        <View
                            style={{
                                height: 100,
                                width: 120,
                                borderWidth: 2,
                                borderColor: `${Colors.light_gray}`,
                                marginRight: 10,
                                borderRadius: 10,
                            }}>
                        </View>

                        <View
                            style={{
                                height: 100,
                                width: 120,
                                borderWidth: 2,
                                borderColor: `${Colors.light_gray}`,
                                marginRight: 10,
                                borderRadius: 10,
                            }}>
                        </View>

                    </ScrollView>
                </View>



            </SafeAreaView>
        </>
    );
}

export default HomeScreen;
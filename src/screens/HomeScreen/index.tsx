import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider } from 'react-native-paper';


// import { Container } from './styles';

const HomeScreen: FC = () => {
    return (
        <>
            <SafeAreaView
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
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
            </SafeAreaView>
        </>
    );
}

export default HomeScreen;
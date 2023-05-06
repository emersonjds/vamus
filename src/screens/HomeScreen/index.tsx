import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
                    <Text
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                    </Text>
                </View>
            </SafeAreaView>
        </>
    );
}

export default HomeScreen;
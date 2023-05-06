import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { Container } from './styles';

const HomeScreen: React.FC = () => {
    return (
        <>
            <SafeAreaView>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'gray'
                    }}
                >
                    <Text
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        Emerson
                    </Text>
                </View>
            </SafeAreaView>
        </>
    );
}

export default HomeScreen;
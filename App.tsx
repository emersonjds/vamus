// import React from 'react';
import Routes from './src/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import HomeScreen from './src/components/screens/HomeScreen';

export default function App() {
  return (
    <>
      {/* <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'red'
        }}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <Text>
            Emerson
          </Text>
        </View>
      </SafeAreaView> */}
      <Routes />
      {/* <HomeScreen /> */}
    </>
  );
} 
// import React from 'react';
import Routes from './src/routes';
import { LogBox } from 'react-native';

export default function App() {

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  return (
    <>
      <Routes />
    </>
  );
} 
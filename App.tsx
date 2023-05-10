// import React from 'react';
import Routes from './src/routes';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/redux/store';

export default function App() {

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
} 
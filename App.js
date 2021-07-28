/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import Router from './src/navigation/root';
import Geolocation from '@react-native-community/geolocation';

navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {
  useEffect(() => {
    Geolocation.requestAuthorization();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;

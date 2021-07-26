import React from 'react';
import {View, Text} from 'react-native';

import CovidMessage from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';

export default function HomeScreen() {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      {/* Bottom Message */}
    </View>
  );
}

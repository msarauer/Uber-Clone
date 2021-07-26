import {blue} from 'chalk';
import React from 'react';
import {View, Text} from 'react-native';

export default function HomeMap() {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: '#a0abff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>I am a Map</Text>
    </View>
  );
}

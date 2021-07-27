import React from 'react';
import {View, Text} from 'react-native';
import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes';

export default function SearchResults() {
  return (
    <View>
      <HomeMap />
      <UberTypes />
    </View>
  );
}

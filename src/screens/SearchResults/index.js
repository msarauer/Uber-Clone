import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

export default function SearchResults() {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap />
      </View>
      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
}

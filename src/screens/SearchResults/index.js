import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
import {useRoute} from '@react-navigation/native';

export default function SearchResults() {
  const route = useRoute();
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

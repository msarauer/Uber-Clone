import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_PLACES_API} from '@env';

export default function RouteMap() {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const destination = {
    latitude: 28.460127,
    longitude: -16.269045,
  };

  return (
    <MapView
      style={{height: '100%', width: '100%'}}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <Marker coordinate={origin} title={'Origin'} />
      <Marker coordinate={destination} title={'Destination'} />
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_PLACES_API}
        strokeWidth={5}
      />
    </MapView>
  );
}

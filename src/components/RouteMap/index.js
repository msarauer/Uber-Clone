import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_PLACES_API} from '@env';

export default function RouteMap({origin, destination}) {
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <MapView
      style={{height: '100%', width: '100%'}}
      showsUserLocation={true}
      initialRegion={{
        latitude: 51.1918,
        longitude: -114.4667,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <Marker coordinate={origin} title={'Origin'} />
      <Marker coordinate={destination} title={'Destination'} />
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_PLACES_API}
        strokeWidth={5}
      />
    </MapView>
  );
}

import React from 'react';
import {Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import cars from '../../assets/data/cars';

export default function HomeMap() {
  const carImages = {
    UberX: require('../../assets/images/top-UberX.png'),
    Comfort: require('../../assets/images/top-Comfort.png'),
    UberXL: require('../../assets/images/top-UberXL.png'),
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
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{rotate: `${car.heading}deg`}],
            }}
            source={carImages[car.type]}
          />
        </Marker>
      ))}
    </MapView>
  );
}

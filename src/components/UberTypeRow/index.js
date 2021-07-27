import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function UberTypeRow({type}) {
  const carImages = {
    UberX: require('../../assets/images/UberX.jpeg'),
    Comfort: require('../../assets/images/Comfort.jpeg'),
    UberXL: require('../../assets/images/UberXL.jpeg'),
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={carImages[type.type]} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}> 8:03pm dropoff</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
}

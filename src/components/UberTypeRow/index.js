import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function UberTypeRow() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/UberX.jpeg')}
      />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          UberX <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}> 8:03pm dropoff</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. $27</Text>
      </View>
    </View>
  );
}

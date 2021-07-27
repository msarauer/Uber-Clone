import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assets/data/types';

export default function UberTypes() {
  return (
    <View>
      {typesData.map(type => {
        return <UberTypeRow />;
      })}
    </View>
  );
}

import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assets/data/types';

export default function UberTypes() {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map(type => {
        return <UberTypeRow type={type} key={type.id} />;
      })}
      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
}

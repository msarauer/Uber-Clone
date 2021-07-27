import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API} from '@env';

export default function DestinationSearch() {
  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('you are here');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where From"
          styles={{textInput: styles.textInput}}
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          fetchDetails
          query={{
            key: GOOGLE_PLACES_API,
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          styles={{textInput: styles.textInput}}
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          fetchDetails
          query={{
            key: GOOGLE_PLACES_API,
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
}

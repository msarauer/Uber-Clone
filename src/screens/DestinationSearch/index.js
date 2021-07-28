import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API} from '@env';
import PlaceRow from './PlaceRow';

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
          enablePoweredByContainer={false}
          placeholder="Where From"
          styles={{
            textInput: styles.textInput,
            container: {...styles.autoCompleteContainer, top: 0},
            listView: styles.listView,
          }}
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          fetchDetails
          query={{
            key: GOOGLE_PLACES_API,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        <GooglePlacesAutocomplete
          enablePoweredByContainer={false}
          placeholder="Where to?"
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
          }}
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          fetchDetails
          query={{
            key: GOOGLE_PLACES_API,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        {/* Circle near origin input */}
        <View style={styles.circle}></View>
        {/* Line between dots */}
        <View style={styles.line}></View>
        {/* Square below line */}
        <View style={styles.square}></View>
      </View>
    </SafeAreaView>
  );
}

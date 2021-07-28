import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API} from '@env';
import PlaceRow from './PlaceRow';
import {useNavigation} from '@react-navigation/native';

export default function DestinationSearch() {
  const navigation = useNavigation();

  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');

  const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
  };
  const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
  };

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          currentLocation={true}
          currentLocationLabel="Current Location"
          enablePoweredByContainer={false}
          placeholder="Where From"
          predefinedPlaces={[homePlace, workPlace]}
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
          renderDescription={data => data.description || data.vicinity}
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

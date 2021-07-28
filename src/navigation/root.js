import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen
          name={'DestinationSearch'}
          component={DestinationSearch}
        />
        <Stack.Screen name={'SearchResults'} component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

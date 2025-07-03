import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';

import {DetailsScreen} from '../screens/Details';
import {HomeScreen} from '../screens/Home';

export type HomeStackParamList = {
  HomeMain: undefined;
  Details: {itemId: number};
};

export type HomeNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: '',
          headerStyle: {backgroundColor: '#F4F4F4'},
        }}
      />
    </Stack.Navigator>
  );
}

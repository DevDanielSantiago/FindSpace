import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// import DetailsScreen from '../screens/Details/DetailsScreen';
import {HomeScreen} from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Detalhes'}}
      /> */}
    </Stack.Navigator>
  );
}

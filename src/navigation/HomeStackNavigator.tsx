import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

// import DetailsScreen from '../screens/Details/DetailsScreen';
import {HomeScreen} from '../screens/Home';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{title: 'Início'}}
      />
      {/* <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Detalhes'}}
      /> */}
    </Stack.Navigator>
  );
}

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {SignInScreen} from '../screens/Auth/SignInScreen';
import {SignUpScreen} from '../screens/Auth/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

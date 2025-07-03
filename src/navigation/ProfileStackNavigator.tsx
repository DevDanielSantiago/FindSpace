import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';

import {LanguageScreen} from '../screens/Language';
import {ProfileScreen} from '../screens/Profile';

export type ProfileStackParamList = {
  ProfileMain: undefined;
  Language: undefined;
};

export type ProfileNavigationProp =
  NativeStackNavigationProp<ProfileStackParamList>;

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{
          title: 'Language',
          headerStyle: {backgroundColor: '#F4F4F4'},
        }}
      />
    </Stack.Navigator>
  );
}

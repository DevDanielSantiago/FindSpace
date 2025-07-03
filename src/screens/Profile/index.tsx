/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, Text, View} from 'react-native';

import {mainStyles} from './styles';

export function ProfileScreen() {
  return (
    <View style={mainStyles.container}>
      <StatusBar backgroundColor={'#F4F4F4'} barStyle={'dark-content'} />

      <Text style={{color: 'black'}}>ProfileScreen</Text>
    </View>
  );
}

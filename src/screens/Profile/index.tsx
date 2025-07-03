/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

import {mainStyles} from './styles';

export function ProfileScreen() {
  return (
    <View style={mainStyles.container}>
      <Text style={{color: 'black'}}>ProfileScreen</Text>
    </View>
  );
}

import React from 'react';
import {StatusBar, Text, View} from 'react-native';

import {mainStyles} from './styles';

export function SignInScreen() {
  return (
    <View style={mainStyles.container}>
      <StatusBar backgroundColor={'#F4F4F4'} barStyle={'dark-content'} />

      <Text style={{color: 'black'}}>SignInScreen</Text>
    </View>
  );
}

import React from 'react';
import {Text, View} from 'react-native';

import {mainStyles} from './styles';

export function SignInScreen() {
  return (
    <View style={mainStyles.container}>
      <Text style={{color: 'black'}}>SignInScreen</Text>
    </View>
  );
}

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import AppNavigator from './AppNavigation';
import AuthNavigator from './AuthNavigator';

export default function RootNavigator() {
  const isSignedIn = true;

  return (
    <NavigationContainer>
      {isSignedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

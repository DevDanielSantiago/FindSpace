import React from 'react';
import {StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootNavigator from './src/navigation';

import './src/i18n';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <PaperProvider /* theme={theme} */>
        <StatusBar backgroundColor={'#F4F4F4'} barStyle={'dark-content'} />
        <RootNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;

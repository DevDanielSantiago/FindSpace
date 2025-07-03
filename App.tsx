import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppNavigator from './src/navigation/AppNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <PaperProvider /* theme={theme} */>
        <AppNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;

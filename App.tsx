import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootNavigator from './src/navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <PaperProvider /* theme={theme} */>
        <RootNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;

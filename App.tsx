import {QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {queryClient} from './src/lib/react-query';
import RootNavigator from './src/navigation';

import './src/i18n';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBar backgroundColor={'#F4F4F4'} barStyle={'dark-content'} />
        <QueryClientProvider client={queryClient}>
          <RootNavigator />
        </QueryClientProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;

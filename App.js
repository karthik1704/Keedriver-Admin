/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';

import Navigations from './src/navigations/Navigations';
import store from './src/redux/store';


const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider config={config}>
          <Navigations />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

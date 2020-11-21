/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {AppStack} from './config/Navigation.js'

const App: () => React$Node = () => {
    return (
      <>
        <AppStack />        
      </>
    );
  };



export default App;

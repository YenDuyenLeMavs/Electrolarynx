/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Signup from './Signup';
import Login from './Login';
import TextToSpeech from './TextToSpeech'
import AppStyles from '../styles/AppStyles';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//const Stack = createNativeStackNavigator();
import TtoS from './TtoS';
//import TtoS_Test2 from './TtoS_Test2';
import ToS_Test3 from './ToS_Test3';

const App = () => {
  return (
    <View style={AppStyles.appView}>
      <TextToSpeech />
    </View>
  );
}

export default App;

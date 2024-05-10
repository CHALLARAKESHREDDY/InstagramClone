/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Home/Header';




function App(): React.JSX.Element {


  return (
    <SafeAreaView style={styles.mainContainer} >
   
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:"black",
    flex:1
  }
});

export default App;

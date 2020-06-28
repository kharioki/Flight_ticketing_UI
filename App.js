/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import BackgroundCurve from './src/components/BackgroundCurve';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <BackgroundCurve />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

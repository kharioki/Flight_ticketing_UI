import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import BoxItem from './BoxItem.js';
import ListSearch from './ListSearch.js';

export default Search = () => {
  return (
    <View style={styles.container}>
      <BackgroundCurve style={styles.svg} />
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.headerContainer}>
          <Entypo name="chevron-left" color="#fff" size={30} />
          <Text style={styles.headerText}>Search Result</Text>
        </View>
        <BoxItem />
        <ListSearch />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  svg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    top: -170,
  },
  bodyContainer: {
    marginTop: 40,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    marginEnd: 30,
  },
});

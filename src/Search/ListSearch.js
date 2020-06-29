import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import mocks from './mocks.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ListSearch() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Best Deals for the Next 6 Months</Text>
      </View>
      <View>
        {mocks.map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <Text style={styles.itemPrice}>
              {item.price}{' '}
              <Text style={styles.itemPriceOriginal}>
                ({item.priceOriginal})
              </Text>
            </Text>
            <View style={styles.itemFooter}>
              <Text style={styles.itemText}>
                <Ionicons name="ios-calendar" /> {item.time}
              </Text>
              <Text style={styles.itemText}>
                <Ionicons name="ios-airplane" /> {item.airline}
              </Text>
              <Text style={styles.itemText}>
                <Ionicons name="ios-star" /> {item.rating}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    padding: 10,
  },
  headerContainer: {
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5f646a',
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 12,
    padding: 20,
    borderRadius: 12,
  },
  itemPrice: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0d1820',
  },
  itemPriceOriginal: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#828595',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemText: {
    color: '#24333a',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

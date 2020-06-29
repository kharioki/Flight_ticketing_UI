import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import mocks from './mocks.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemView = ({item}) => (
  <View style={styles.itemContainer} key={item.id}>
    <Text style={styles.itemPrice}>
      {item.price}{' '}
      <Text style={styles.itemPriceOriginal}>({item.priceOriginal})</Text>
    </Text>
    <View style={styles.itemFooter}>
      <Text style={styles.itemText}>
        <Ionicons name="ios-calendar" style={styles.icon} />
        {'  '} {item.time}
      </Text>
      <Text style={styles.itemText}>
        <Ionicons name="ios-airplane" style={styles.icon} />
        {'  '}
        {item.airline}
      </Text>
      <Text style={styles.itemText}>
        <Ionicons name="ios-star" style={styles.icon} />
        {'  '} {item.rating}
      </Text>
    </View>
    <Text style={styles.saleoff}>{item.saleoff}%</Text>
  </View>
);

export default function ListSearch() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Best Deals for the Next 6 Months</Text>
      </View>
      <View style={styles.bodyContainer}>
        {mocks.map((item, index) => (
          <ItemView item={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    padding: 10,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingHorizontal: 15,
  },
  bodyContainer: {
    marginTop: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5f646a',
  },
  itemContainer: {
    borderWidth: 1.5,
    borderColor: '#efeff0',
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
    textDecorationLine: 'line-through',
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
  icon: {
    marginRight: 10,
  },
  saleoff: {
    position: 'absolute',
    backgroundColor: '#fff0e8',
    color: '#ff7200',
    fontWeight: 'bold',
    padding: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    right: -10,
    top: 10,
  },
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import mocks from './mocks.json';

const w = Dimensions.get('window').width;

const Item = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageBg}>
        <Image source={{uri: item.image}} style={styles.itemImage} />
        <View style={styles.itemInner}>
          <View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemTime}>{item.time}</Text>
          </View>
          <View style={{borderRadius: 30, overflow: 'hidden'}}>
            <Text style={styles.itemSaleOff}>{item.saleoff}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.itemPrice}>
        {item.price}{' '}
        <Text style={styles.itemPriceOriginal}>({item.priceOriginal})</Text>
      </Text>
    </View>
  );
};

export default function ListCard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>Currently Watched Items</Text>
        <Text style={[styles.textHeader, {color: '#fb7200'}]}>
          VIEW ALL (12)
        </Text>
      </View>
      <ScrollView horizontal>
        {mocks.map(item => {
          return <Item key={item.id} item={item} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 20,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  itemContainer: {
    marginRight: 20,
  },
  itemImage: {
    width: (w - 60) / 2,
    height: (w - 40) / 2 + 30,
    backgroundColor: 'gray',
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
  },
  itemPriceOriginal: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  itemInner: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'space-between',
    padding: 12,
    alignItems: 'flex-end',
  },
  imageBg: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemTime: {
    color: '#eee',
    fontWeight: '500',
    fontSize: 14,
  },
  itemSaleOff: {
    fontWeight: 'bold',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

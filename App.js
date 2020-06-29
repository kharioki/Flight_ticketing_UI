import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from './src/Home';
import Search from './src/Search';

const Tab = createBottomTabNavigator();

const Blank = () => {
  return <View />;
};

export default function App() {
  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;

      if (route.name === 'Explore') {
        iconName = 'home';
      } else if (route.name === 'Watchlist') {
        iconName = 'heart';
      } else if (route.name === 'Details') {
        iconName = 'price-tag';
      } else if (route.name === 'Notifications') {
        iconName = 'bell';
      }

      return <Entypo name={iconName} size={size} color={color} />;
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: '#fb7200',
          inactiveTintColor: '#464962',
        }}>
        <Tab.Screen name="Explore" component={Home} />
        <Tab.Screen name="Watchlist" component={Search} />
        <Tab.Screen name="Details" component={Blank} />
        <Tab.Screen name="Notifications" component={Blank} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

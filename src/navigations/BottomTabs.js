import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Home from '../pages/home/index';
import Shop from '../pages/shop/index';
import Cart from '../pages/cart';
import My from '../pages/my';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: 'md-checkmark-circle',
  Shop: 'apps-outline',
  Cart: 'at-outline',
  My: 'person-outline',
};
const createScreenOptions = ({route}) => {
  console.log(route);
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    tabBarIcon: ({size, color}) => {
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  };
};

export default function BottomTabs() {
  return (
    <>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="My" component={My} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: '#4630eb',
  },
});

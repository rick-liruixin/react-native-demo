import React, {useRef, useCallback} from 'react';
import {View, Text} from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Login from '../pages/login/index';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
// import setContainer from "../../utils/NavigationUtil";
const Stack = createStackNavigator();
export default function Navigations() {
  // const NavigationRef = useRef(null);
  // const setNavigationRef = useCallback(() => {
  //   if (NavigationRef.current) {
  //     setContainer(NavigationRef.current);
  //   }
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={'HomeMainTab'}>
        <Stack.Screen name="HomeMainTab" component={BottomTabs} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

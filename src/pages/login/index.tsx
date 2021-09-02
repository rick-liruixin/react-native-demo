import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

export default function Login() {
  let loginInfo = useSelector(store => store.loginInfo);
  console.log('loginInfo', loginInfo);
  return (
    <SafeAreaView>
      <Text>login</Text>
      <Text>Store的登录状态{JSON.stringify(loginInfo)}</Text>
    </SafeAreaView>
  );
}

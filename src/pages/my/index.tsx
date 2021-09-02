import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button, Provider, Toast} from '@ant-design/react-native';
export default function My({navigation}: any) {
  return (
    <Provider>
      <SafeAreaView>
        <View>
          <Text>my</Text>
          <Button onPress={() => Toast.info('This is a toast tips')}>
            Start
          </Button>
          <Button onPress={() => navigation.navigate('Login')}>
            Go to Login
          </Button>
        </View>
      </SafeAreaView>
    </Provider>
  );
}

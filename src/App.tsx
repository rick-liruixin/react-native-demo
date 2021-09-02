import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/index';
import {RootSiblingParent} from 'react-native-root-siblings';
import Navigations from './navigations/index';
import * as Font from 'expo-font';
export default function App() {
  const [isReady, setisReady] = useState(false);
  useEffect(() => {
    (async () => {
      await Font.loadAsync(
        'antoutline',
        // eslint-disable-next-line
        require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
      );

      await Font.loadAsync(
        'antfill',
        // eslint-disable-next-line
        require('@ant-design/icons-react-native/fonts/antfill.ttf'),
      );
      // eslint-disable-next-line
      setisReady(true);
    })();
  }, []);

  if (!isReady) {
    return null;
  }
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <Navigations />
      </Provider>
    </RootSiblingParent>
  );
}

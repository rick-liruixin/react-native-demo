import React, {useState} from 'react';
import {View, Text, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {getRealPx} from '../../utils/designUtil';
import {
  InputItem,
  List,
  Carousel,
  SearchBar,
  Grid,
} from '@ant-design/react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Home({navigation}: any) {
  const [state, setstate] = useState('');
  const [banner] = useState([
    'https://i0.hdslb.com/bfs/feed-admin/6d411b0a1a5dc535a2f31337fe1eda4054c1709c.jpg',
    'https://i0.hdslb.com/bfs/feed-admin/61d7d0cf8b90fe4343a07d907b204b0494195be6.jpg',
    'https://i0.hdslb.com/bfs/feed-admin/c9c2ef5fa826cb93cc6a16538d267bc184bf7441.jpg',
    'https://i0.hdslb.com/bfs/feed-admin/1fef2577d28f15d8038ec5356ef481fe3aba4c39.png',
  ]);
  const Griddata = Array.from(new Array(8)).map((_val, i) => ({
    icon: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_pic%2F01%2F19%2F87%2F72570bce49baebb.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633087968&t=740841383fa5ee95c0392c27bd015100',
    text: `Name${i}`,
  }));
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SearchBar defaultValue="初始值" placeholder="搜索" />
        <Carousel
          style={styles.bannerBox}
          autoplay
          autoplayInterval={3000}
          infinite={true}>
          {banner.map((item, index) => (
            <Image
              key={index}
              style={[styles.bannerImage]}
              source={{
                uri: item,
              }}
              fadeDuration={0}
              resizeMode="stretch"
            />
          ))}
        </Carousel>
        <View>
          <Text>分类</Text>
          <Grid data={Griddata} columnNum={4} hasLine={false} />
        </View>
        {/* <List>
          <InputItem
            clear
            error
            value={state}
            onChange={value => setstate(value)}
            extra="元"
            placeholder="有标签">
            输入框
          </InputItem>
        </List> */}
        <Text>home</Text>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Image
          source={require('../../assets/image/rick.png')}
          fadeDuration={0}
          style={{width: 50, height: 50}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerBox: {
    width: '100%',
    height: 200,
  },
  bannerImage: {
    flex: 1,
  },
});

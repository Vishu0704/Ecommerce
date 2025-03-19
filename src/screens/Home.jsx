import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {height, width} from '../utilites/helper/Helper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {man} from '../../Store/Mens';
import {products} from '../../Store/All';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import BottomNavigation from '../bottom/BottomNavigation';

const Home = props => {
  return (
    
    
      <ScrollView style={Styles.main}>
        
        <View>
          <Image
            source={require('../utilites/images/6.png')}
            style={Styles.img}
            resizeMode="contain"
          />
          <View style={{position: 'absolute', bottom: 50, marginLeft: 10}}>
            <Text style={Styles.txt}>Fashion</Text>
            <Text style={Styles.txt}>Sale</Text>
            <TouchableOpacity style={Styles.check_btn}>
              <Text style={{color: 'white', fontWeight: '600'}}>Check Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.V1}>
          <View style={Styles.V2}>
            <Text style={Styles.txt_new}>New</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Items')}>
              <Text style={Styles.txt_view}>View All</Text>
            </TouchableOpacity>
          </View>
          <Text style={Styles.txt_view}>You’ve never seen it before!</Text>
        </View>

        <View>
          <SwiperFlatList
            index={2}
            data={products}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  style={Styles.touch_detail}
                  onPress={() => {
                    props.navigation.navigate('Details', {data: item});
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={Styles.image}
                    resizeMode="contain"
                  />
                  <Text style={Styles.title}>{item.title}</Text>
                  <Text style={Styles.price}>${item.price}</Text>
                </TouchableOpacity>
                <View style={Styles.V3}>
                  <Text style={Styles.new}>New</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View>
          <Image
            source={require('../utilites/images/7.png')}
            style={Styles.img1}
            resizeMode="contain"
          />
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              marginLeft: 10,
              flexDirection: 'row',
            }}>
            <Text style={Styles.txt1}>Street</Text>
            <Text style={Styles.txt1}>clothes</Text>
          </View>
        </View>
        <View style={Styles.V1}>
          <View style={Styles.V2}>
            <Text style={Styles.txt_new}>Sale</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Items')}>
              <Text style={Styles.txt_view}>View All</Text>
            </TouchableOpacity>
          </View>
          <Text style={Styles.txt_view}>Super summer sale</Text>
        </View>
        <View>
          <SwiperFlatList
            index={2}
            data={products}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  style={Styles.touch_detail}
                  onPress={() => {
                    props.navigation.navigate('Details', {data: item});
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={Styles.image}
                    resizeMode="contain"
                  />
                  <Text style={Styles.title}>{item.title}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={Styles.price2}>$100</Text>
                    <Text style={Styles.price1}>${item.price}</Text>
                  </View>
                </TouchableOpacity>
                <View style={Styles.V4}>
                  <Text style={Styles.new}>-60%</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../utilites/images/8.png')}
              style={Styles.img2}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 20,
                flexDirection: 'row',
                right: 5,
              }}>
              <Text style={Styles.txt1}>New</Text>
              <Text style={Styles.txt1}>Collection</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity>
              <View
                style={{
                  height: 187,
                  width: width / 2,
                  justifyContent: 'center',
                }}>
                <Text style={Styles.txt_sale}> Summer</Text>
                <Text style={Styles.txt_sale}> Sale</Text>
              </View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity>
                <Image
                  source={require('../utilites/images/11.png')}
                  style={Styles.img4}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    flexDirection: 'row',
                    left: 5,
                  }}>
                  <Text style={Styles.txt1}>Black!</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../utilites/images/10.png')}
              style={Styles.img3}
            />
          </TouchableOpacity>
        </View>
       
      </ScrollView>
  
  );
};

export default Home;

const Styles = StyleSheet.create({
  main: {
    flex: 1,
  

  },
  img: {
    height: height / 1.5,
    width: width / 1,
  },
  txt: {
    color: 'white',
    fontWeight: '800',
    fontSize: 54,
  },
  check_btn: {
    backgroundColor: 'red',
    width: width / 2,
    height: 40,
    justifyContent: 'center',
    borderRadius: 40,
    alignItems: 'center',
  },
  txt_new: {
    fontSize: 40,
    fontWeight: '700',
  },
  V1: {
    padding: 15,
  },
  V2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt_view: {
    color: 'grey',
  },

  image: {
    height: width / 2,
    width: width / 2,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    color: 'green',
    textAlign: 'center',
    marginTop: 5,
  },
  touch_detail: {
    borderRadius: 10,
    shadowOpacity: 0.07,
    shadowRadius: 3,
    elevation: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 1.9,
    backgroundColor: '#ffffff',
    margin: 10,
    height: width / 1.35,
  },
  new: {
    color: 'white',
  },
  V3: {
    backgroundColor: 'black',
    position: 'absolute',
    width: 50,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 14,
    marginLeft: 12,
  },
  img1: {
    height: height / 3.5,
    width: width / 1,
  },
  txt1: {
    color: 'white',
    fontWeight: '800',
    fontSize: 34,
    marginRight: 5,
  },
  V4: {
    backgroundColor: 'red',
    position: 'absolute',
    width: 50,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 14,
    marginLeft: 12,
  },
  img2: {
    height: 366,
    width: width / 1,
    marginTop: 20,
  },
  img3: {
    height: 374,
    width: width / 2,
  },
  img4: {
    height: 187,
    width: width / 2,
  },
  txt_sale: {
    fontSize: 40,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price1: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    marginTop: 5,
  },
  price2: {
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    marginTop: 5,
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
});

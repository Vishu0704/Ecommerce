import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Header, width} from '../utilites/helper/Helper';
import {man} from '../../Store/Mens';

const Man = props => {
  const [loading, setLoading] = useState(false);
  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={Styles.main}>
      <Header onPress={() => props.navigation.goBack()} txt={'Mens'} />
      <View style={{marginTop: 20}}>
        <FlatList
          numColumns={2}
          onRefresh={handleRefresh}
          refreshing={loading}
          data={man}
          renderItem={({item}) => (
            <View style={Styles.touch_detail}>
              <View style={{marginTop: 20}}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Details', {data: item});
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={Styles.image1}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Text style={Styles.title1}>{item.title}</Text>
                <Text style={Styles.price}>${item.price}</Text>
              </View>
              {item.qty == 0 ? (
                <View
                  style={{
                    marginTop: 10,
                    alignItems: 'center',
                    height: 50,
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 2,
                  }}>
                  <TouchableOpacity style={Styles.cart}>
                    <Text style={Styles.carttxt}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={Styles.qtybtn}>
                  <TouchableOpacity style={Styles.minus}>
                    <Text style={Styles.carttxt}>-</Text>
                  </TouchableOpacity>
                  <Text>{item.qty}</Text>
                  <TouchableOpacity style={Styles.plus}>
                    <Text style={Styles.carttxt}>+</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Man;

const Styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image1: {
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 10,
  },
  title1: {
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

    width: width / 2.25,
    backgroundColor: '#ffffff',
    margin: 10,
    height: width / 1.3,
  },
  cart: {
    backgroundColor: 'black',
    width: width / 3,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carttxt: {
    color: 'white',
  },
  qtybtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 4,
    marginTop: 10,
    alignItems: 'center',
    height: 50,
    position: 'absolute',
    bottom: 2,
  },
  plus: {
    backgroundColor: 'green',
    width: 25,
    height: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minus: {
    backgroundColor: 'red',
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

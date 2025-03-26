import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Header, width } from '../utilites/helper/Helper';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToMyCart,removeProductFromCart,loadCartFromStorage } from '../../Redux/MyCartSlice';
import {products} from '../../Store/All';


const Items = props => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  const myCart = useSelector(state => state.cart);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const isInCart = productId => {
    return myCart.some(item => item.id === productId);
  };
  useEffect(() => {
  
    dispatch(loadCartFromStorage());
  }, [dispatch]);
  return (
    <SafeAreaView style={Styles.main}>
    
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '97%' }}>
        <Header onPress={() => props.navigation.goBack()} txt={'Products'} />
        <View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
            <Image
              source={require("../utilites/images/18.png")}
              style={{ height: 30, width: 50 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'lightgrey',
              borderRadius: 15,
              position: 'absolute',
              right: 2,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              top: -10,
            }}
          >
            <Text>{myCart.reduce((total, item) => total + item.qty, 0)}</Text>
          </View>
        </View>
      </View>

      <FlatList
        numColumns={2}
        onRefresh={handleRefresh}
        refreshing={loading}
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          const inCart = isInCart(item.id);

          return (
            <View style={Styles.touch_detail}>
              <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Details', { data: item });
                  }}
                >
                  <Image source={{ uri: item.image }} style={Styles.image1} resizeMode="contain" />
                </TouchableOpacity>
                <Text style={Styles.title1}>{item.title}</Text>
                <Text style={Styles.price}>${item.price}</Text>
              </View>

            
              {!inCart ? (
                <View style={Styles.addToCartContainer}>
                  <TouchableOpacity
                    style={Styles.cart}
                    onPress={() => {
                      dispatch(addProductToMyCart(item));
                    
                    }}
                  >
                    <Text style={Styles.carttxt}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={Styles.qtybtn}>
                <TouchableOpacity
                  style={Styles.minus}
                  onPress={() => dispatch(removeProductFromCart(item))}
                >
                  <Text style={Styles.carttxt}>-</Text>
                </TouchableOpacity>

                <Text>{myCart.find(cartItem => cartItem.id === item.id)?.qty || 0}</Text>

                <TouchableOpacity
                  style={Styles.plus}
                  onPress={() => dispatch(addProductToMyCart(item))}
                >
                  <Text style={Styles.carttxt}>+</Text>
                </TouchableOpacity>
              </View>
              )}
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Items;

const Styles = StyleSheet.create({
  main: { flex: 1 },
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
  addToCartContainer: {
    marginTop: 10,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 2,
  },
});

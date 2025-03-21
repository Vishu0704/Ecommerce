import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { Header, width } from '../utilites/helper/Helper';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToMyCart, removeProductFromCart, clearCart } from '../../Redux/MyCartSlice';

const Cart = props => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const myCart = useSelector(state => state.cart);
  console.log(myCart);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  
  const getTotal = () => {
    return myCart.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2);
  };

  return (
    <SafeAreaView style={Styles.main}>
      <Header onPress={() => props.navigation.goBack()} txt={'Cart'} />
      <View>
        <FlatList
          numColumns={2}
          onRefresh={handleRefresh}
          refreshing={loading}
          data={myCart}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={Styles.touch_detail}>
              <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Details', { data: item })}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={Styles.image1}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Text style={Styles.title1}>{item.title}</Text>
                <Text style={Styles.price}>${item.price}</Text>
              </View>

       
              <View style={Styles.qtybtn}>
                <TouchableOpacity
                  style={Styles.minus}
                  onPress={() => dispatch(removeProductFromCart(item))}
                >
                  <Text style={Styles.carttxt}>-</Text>
                </TouchableOpacity>

                <Text>{item.qty}</Text>

                <TouchableOpacity
                  style={Styles.plus}
                  onPress={() => dispatch(addProductToMyCart(item))}
                >
                  <Text style={Styles.carttxt}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

     
      <View style={Styles.totalContainer}>
        <Text style={Styles.totalText}>Total Price: ${getTotal()}</Text>

     
        {myCart.length > 0 && (
          <TouchableOpacity
            style={Styles.clearCart}
            onPress={() => dispatch(clearCart())}
          >
            <Text style={Styles.clearCartText}>Clear Cart</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={Styles.placeOrder}>
          <Text style={Styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

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
  totalContainer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  clearCart: {
    height: 50,
    width: 150,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  clearCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  placeOrder: {
    height: 50,
    width: 150,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  placeOrderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

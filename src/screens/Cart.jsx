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
import React, {useState} from 'react';
import {Header, width} from '../utilites/helper/Helper';
import {useSelector, useDispatch} from 'react-redux';
import {
  addProductToMyCart,
  removeProductFromCart,
  clearCart,
  deleteProductFromCart
} from '../../Redux/MyCartSlice';
import Modal from 'react-native-modal';

const Cart = (props )=> {
  const [isModalVisible, setModalVisible] = useState(false);
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
    return myCart
      .reduce((total, item) => total + item.qty * item.price, 0)
      .toFixed(2);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const yesModal = () => {
    dispatch(clearCart());
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={Styles.main}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '97%',
        }}>
        <Header onPress={() => props.navigation.goBack()} txt={'My Cart'} />
        <View>
          {myCart.length > 0 && (
            <TouchableOpacity onPress={() => toggleModal()}>
              <Image
                source={require('../utilites/images/19.png')}
                style={{height: 25, width: 50}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={{marginBottom: 125}}>
        <FlatList
          onRefresh={handleRefresh}
          refreshing={loading}
          data={myCart}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={Styles.touch_detail}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('Details', {data: item})
                  }>
                  <Image
                    source={{uri: item.image}}
                    style={Styles.image1}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <View style={{justifyContent: 'center',marginTop:15}}>
                  <Text style={Styles.title1}>{item.title}</Text>
                  <Text style={Styles.price}>${item.price}</Text>

                  <View style={Styles.qtybtn}>
                    <TouchableOpacity
                      style={Styles.minus}
                      onPress={() => dispatch(removeProductFromCart(item))}>
                      <Text style={Styles.carttxt}>-</Text>
                    </TouchableOpacity>

                    <Text>{item.qty}</Text>

                    <TouchableOpacity
                      style={Styles.plus}
                      onPress={() => dispatch(addProductToMyCart(item))}>
                      <Text style={Styles.carttxt}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{position:'absolute',right:5,marginVertical:5}}>
              <TouchableOpacity
                    style={Styles.minus}
                    onPress={() => dispatch(deleteProductFromCart(item))}>
                  <Image source={require("../utilites/images/close.png")} style={{height:10,width:10}}/>
                  </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      {myCart.length > 0 && (
        <View style={Styles.V1}>
          <Text style={Styles.totalText}>Total Price: ${getTotal()}</Text>
          <TouchableOpacity
            style={Styles.placeOrder}
            onPress={() => {
              Alert.alert('Order Placed!!😂😂😂');
            }}>
            <Text style={Styles.placeOrdrTxt}>Place Order</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal isVisible={isModalVisible}>
        <View
          style={Styles.modal}>
          <Text style={{fontSize: 19, fontWeight: '500'}}>
            Are You sure You want To clear Your Cart?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 40,
              justifyContent: 'space-between',
              width: width / 1.5,
              alignSelf:'center'
            }}>
            <TouchableOpacity onPress={toggleModal} style={Styles.yesno}>
              <Text style={{fontSize: 19, fontWeight: '500', color: 'white'}}>
                No
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => yesModal()} style={Styles.yesno}>
              <Text style={{fontSize: 19, fontWeight: '500', color: 'white'}}>
                Yes
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
      {myCart.length == 0 && (
      <View style={Styles.empty}>
        <Text style={Styles.oops}>Oops, cart's empty!☹️</Text>
      </View>)}
    </SafeAreaView>
  );
};

export default Cart;

const Styles = StyleSheet.create({
  main: {flex: 1},
  image1: {
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 10,
  },
  title1: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: width / 2,
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
    width: width / 1.1,
    backgroundColor: '#ffffff',
    margin: 10,
    height: width / 2.3,
    padding: 10,
  },
  qtybtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 4,
    marginTop: 10,
    alignItems: 'center',
    height: 50,
    alignSelf: 'center',
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
  V1: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    width: width,
    justifyContent: 'space-around',
    bottom: 1,
    height: 100,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  clearCart: {
    height: 50,
    width: 120,
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
    width: 120,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  placeOrdrTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  yesno: {
    height: 50,
    width: 75,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
  },modal:{
    alignSelf: 'center',

    height: width / 2.1,
    width: width / 1.1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },
  empty:{
    alignSelf:'center',
  },oops:{
    fontSize:30,
    fontWeight:'bold'
  }
});

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
import React, {useEffect, useState} from 'react';
import {Header, width} from '../utilites/helper/Helper';
import {useSelector, useDispatch} from 'react-redux';
import {removeFavouriteFromCart} from '../../Redux/MyFavourite';
import { addProductToMyCart,loadCartFromStorage } from '../../Redux/MyCartSlice';

const Favorite = props => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const myFavourite = useSelector(state => state.favourite);
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '97%',
        }}>
        <Header
          onPress={() => props.navigation.goBack()}
          txt={'My Favourite'}
        />
        <View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
            <Image
              source={require('../utilites/images/18.png')}
              style={{height: 30, width: 50}}
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
            }}>
            <Text>{myCart.reduce((total, item) => total + item.qty, 0)}</Text>
          </View>
        </View>
      </View>
      <View >
        <FlatList
          onRefresh={handleRefresh}
          refreshing={loading}
          data={myFavourite}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            const inCart = isInCart(item.id);

            return(
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
                <View style={{justifyContent: 'center'}}>
                  <Text style={Styles.title1}>{item.title}</Text>
                  <Text style={Styles.price}>${item.price}</Text>
                  <View style={{marginTop:5}}>
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
                </View>       ) : (     <View style={Styles.addToCartContainer}>
                  <TouchableOpacity
                    style={Styles.cart}
                    onPress={() => {
              Alert.alert("Product Already added to the Cart")
                    
                    }}
                  >
                    <Text style={Styles.carttxt}>Added</Text>
                  </TouchableOpacity>
                </View>         )}
                </View> 
                </View>
              </View>
              <View style={{position:'absolute',right:5,marginVertical:5}}>
              <TouchableOpacity
                    style={Styles.minus}
                    onPress={() => dispatch(removeFavouriteFromCart(item))}>
                  <Image source={require("../utilites/images/close.png")} style={{height:10,width:10}}/>
                  </TouchableOpacity>
              </View>
            </View>);
          }}
        />
      </View>

      {myFavourite.length == 0 && (
        <View style={Styles.empty}>
          <Text style={Styles.oops}>Your favorites are empty!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Favorite;

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
  minus: {
    backgroundColor: 'lightgrey',
    padding: 5,
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
  oops: {
    fontSize: 30,
    fontWeight: 'bold',
  }, empty:{
    alignSelf:'center',
marginTop:width/2
  },addToCartContainer: {
   
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
   
  },cart: {
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
});

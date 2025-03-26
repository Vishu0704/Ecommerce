import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header, width} from '../utilites/helper/Helper';
import {useSelector, useDispatch} from 'react-redux';
import {
  addProductToMyCart,
  removeProductFromCart,
  loadCartFromStorage,
} from '../../Redux/MyCartSlice';
import {addProductToFavourite} from '../../Redux/MyFavourite';
import {products} from '../../Store/All';

const Details = props => {
  const data = props.route.params.data;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const myCart = useSelector(state => state.cart);
  const myFavourite = useSelector(state => state.favourite);
  const isInCart1 = myCart.some(item => item.id === data.id);
  const isInFavourite = myFavourite.some(item => item.id === data.id);
  const cartItem = myCart.find(item => item.id === data.id);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    dispatch(loadCartFromStorage());
  }, [dispatch]);

  const isInCart = productId => {
    return myCart.some(item => item.id === productId);
  };

  const handleProductPress = item => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.navigation.navigate('Details', {data: item});
    }, 2000);
  };

  return (
    <SafeAreaView style={Styles.main}>
      {loading && (
        <View style={Styles.loadingContainer}>
          <ActivityIndicator size="large" color="black" />
        </View>
      )}

      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '97%',
            marginVertical: 10,
          }}>
          <Header onPress={() => props.navigation.goBack()} />
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

        <View>
          <Image
            source={{uri: data.image}}
            style={Styles.image}
            resizeMode="contain"
          />
          {isInFavourite ? (
            <TouchableOpacity
              style={Styles.fav}
              onPress={() => dispatch(addProductToFavourite(data))}>
              <Image
                source={require('../utilites/images/12.png')}
                style={{height: 22, width: 50}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={Styles.fav}
              onPress={() => dispatch(addProductToFavourite(data))}>
              <Image
                source={require('../utilites/images/13.png')}
                style={{height: 22, width: 50}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={Styles.V1}>
          <Text style={Styles.title}>{data.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={Styles.price2}>$100</Text>
            <Text style={Styles.price1}>${data.price}</Text>
          </View>
          <Text style={Styles.txt}>{data.description}</Text>
        </View>

        {isInCart1 ? (
          <View style={Styles.V4}>
            <TouchableOpacity
              style={Styles.btn2}
              onPress={() => dispatch(removeProductFromCart(data))}>
              <Text style={Styles.btntxt}>-</Text>
            </TouchableOpacity>
            <View
              style={{
                borderLeftWidth: 1,
                borderRightWidth: 1,
                height: 35,
                width: 35,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
              }}>
              <Text>{cartItem?.qty || 0}</Text>
            </View>
            <TouchableOpacity
              style={Styles.btn2}
              onPress={() => dispatch(addProductToMyCart(data))}>
              <Text style={Styles.btntxt}>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={Styles.check_btn}
            onPress={() => {
              dispatch(addProductToMyCart(data));
            }}>
            <Text style={{color: 'white', fontWeight: '600'}}>Add To Cart</Text>
          </TouchableOpacity>
        )}

        <View style={Styles.V2}>
          <Text style={Styles.txt_new}>You can also like this</Text>
        </View>

        <View>
          <FlatList
            numColumns={2}
            onRefresh={handleRefresh}
            refreshing={loading}
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              const inCart = isInCart(item.id);

              return (
                <View style={Styles.touch_detail}>
                  <View style={{marginTop: 20}}>
                    <TouchableOpacity onPress={() => handleProductPress(item)}>
                      <Image
                        source={{uri: item.image}}
                        style={Styles.image1}
                        resizeMode="contain"
                      />
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
                        }}>
                        <Text style={Styles.carttxt}>Add To Cart</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={Styles.qtybtn}>
                      <TouchableOpacity
                        style={Styles.minus}
                        onPress={() => dispatch(removeProductFromCart(item))}>
                        <Text style={Styles.carttxt}>-</Text>
                      </TouchableOpacity>

                      <Text>
                        {myCart.find(cartItem => cartItem.id === item.id)
                          ?.qty || 0}
                      </Text>

                      <TouchableOpacity
                        style={Styles.plus}
                        onPress={() => dispatch(addProductToMyCart(item))}>
                        <Text style={Styles.carttxt}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const Styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 10,
  },
  image: {
    height: width / 1,
    width: width / 1,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  price1: {
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
    marginTop: 5,
  },
  price2: {
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    marginTop: 8,
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  txt: {
    color: 'grey',
    marginTop: 10,
  },
  V1: {
    padding: 10,
  },
  check_btn: {
    backgroundColor: 'red',
    width: width / 1.05,
    height: 50,
    justifyContent: 'center',
    borderRadius: 40,
    alignItems: 'center',
    alignSelf: 'center',
  },
  fav: {
    height: 35,
    width: 35,
    borderWidth: 1,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    marginTop: 20,
  },
  V2: {
    padding: 10,
  },
  txt_new: {
    fontSize: 25,
    fontWeight: '600',
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
  V4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 1,
    width: width / 2,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  btntxt: {
    color: 'black',
  },
  btn2: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
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

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
import {removeFavouriteFromCart } from '../../Redux/MyFavourite';

const Favorite = (props )=> {

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



  

  return (
    <SafeAreaView style={Styles.main}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '97%' }}>
        <Header onPress={() => props.navigation.goBack()} txt={'My Favourite'} />
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
      <View style={{marginBottom: 125}}>
        <FlatList
          
          onRefresh={handleRefresh}
          refreshing={loading}
          data={myFavourite}
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
                <View style={{justifyContent: 'center'}}>
                  <Text style={Styles.title1}>{item.title}</Text>
                  <Text style={Styles.price}>${item.price}</Text>

               
                    <TouchableOpacity
                      style={Styles.minus}
                      onPress={() => dispatch(removeFavouriteFromCart(item))}>
                      <Text style={Styles.carttxt}>Remove From Favorite</Text>
                    </TouchableOpacity>

                  
                </View>
              </View>
            </View>
          )}
        />
      </View>


  
      {/* {myCart.length == 0 && (
      <View style={Styles.empty}>
        <Text style={Styles.oops}>Oops, cart's empty!☹️</Text>
      </View>)} */}
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
    backgroundColor: 'red',
   
  padding:10,
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

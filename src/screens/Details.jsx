import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { Header, width } from '../utilites/helper/Helper';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToMyCart, removeProductFromCart, } from '../../Redux/MyCartSlice';
import {addProductToFavourite } from '../../Redux/MyFavourite';

const Details = (props) => {
  const data = props.route.params.data;
  const dispatch = useDispatch();
  const myProducts = useSelector(state => state.product);

  const myCart = useSelector(state => state.cart);
  const myFavourite = useSelector(state => state.favourite);
  console.log(myFavourite,">>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<");
  

  const isInCart = myCart.some(item => item.id === data.id);
  const isInFavourite = myFavourite.some(item => item.id === data.id);
  
 
  const cartItem = myCart.find(item => item.id === data.id);
  
  const [fav, setFav] = useState(false);

  const handleFav = () => {
    setFav(!fav);
  };

  return (
    <SafeAreaView style={Styles.main}>
      <ScrollView>
        <Header onPress={() => props.navigation.goBack()} />

        <View>
          <Image
            source={{ uri: data.image }}
            style={Styles.image}
            resizeMode="contain"
          />
{isInFavourite ?(<TouchableOpacity style={Styles.fav} onPress={() => dispatch(addProductToFavourite(data))}>
            <Image
              source={
               
                   require('../utilites/images/12.png')
              }
              style={{ height: 22, width: 50 }}
              resizeMode="contain"
            />
          </TouchableOpacity>):<TouchableOpacity style={Styles.fav} onPress={() => dispatch(addProductToFavourite(data))}>
            <Image
              source={
             
                 require('../utilites/images/13.png')
                 
              }
              style={{ height: 22, width: 50 }}
              resizeMode="contain"
            />
          </TouchableOpacity>}
          
        </View>

        <View style={Styles.V1}>
          <Text style={Styles.title}>{data.title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={Styles.price2}>$100</Text>
            <Text style={Styles.price1}>${data.price}</Text>
          </View>
          <Text style={Styles.txt}>{data.description}</Text>
        </View>

        {isInCart ? (
          <View style={Styles.V4}>
            <TouchableOpacity
              style={Styles.btn2}
              onPress={() => dispatch(removeProductFromCart(data))}
            >
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
              }}
            >
              <Text>{cartItem?.qty || 0}</Text>
            </View>
            <TouchableOpacity
              style={Styles.btn2}
              onPress={() => dispatch(addProductToMyCart(data))}
            >
              <Text style={Styles.btntxt}>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
         
          <TouchableOpacity
            style={Styles.check_btn}
            onPress={() => {
              dispatch(addProductToMyCart(data));
            }}
          >
            <Text style={{ color: 'white', fontWeight: '600' }}>Add To Cart</Text>
          </TouchableOpacity>
        )}

        <View style={Styles.V2}>
          <Text style={Styles.txt_new}>You can also like this</Text>
        </View>

        <View>
          <FlatList
            numColumns={2}
            data={myProducts}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  style={Styles.touch_detail}
                  onPress={() => {
                    props.navigation.navigate('Details', { data: item });
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={Styles.image1}
                    resizeMode="contain"
                  />
                  <Text style={Styles.title1}>{item.title}</Text>
                  <Text style={Styles.price}>${item.price}</Text>
                </TouchableOpacity>
              </View>
            )}
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
    justifyContent: 'center',
    width: width / 2.25,
    backgroundColor: '#ffffff',
    margin: 10,
    height: width / 1.5,
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
});

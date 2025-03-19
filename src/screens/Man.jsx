import { View, Text, SafeAreaView, StyleSheet, FlatList,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { Header, width } from '../utilites/helper/Helper'
import {man} from '../../Store/Mens';

const Man = (props) => {
    const [loading, setLoading] = useState(false);
    const handleRefresh = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      };
    
  return (
    <SafeAreaView style={Styles.main}>
        <Header onPress={() => props.navigation.goBack()} txt={"Mens"}/>
        <View>
          <FlatList
            numColumns={2}
            onRefresh={handleRefresh}
            refreshing={loading}
            data={man}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  style={Styles.touch_detail}
                  onPress={() => {
                    props.navigation.navigate('Details', {data: item});
                  }}>
                  <Image
                    source={{uri: item.image}}
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
    </SafeAreaView>
  )
}

export default Man

const Styles = StyleSheet.create({
    main:{
        flex:1
    },image1: {
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
})
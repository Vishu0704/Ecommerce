import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Header } from '../utilites/helper/Helper'

const Cart = (props) => {
  return (
    <SafeAreaView style={Styles.main}>
      <Header txt={"My Cart"} onPress={()=>props.navigation.goBack()}/>
    <View >
      <Text>Cart</Text>
    </View>
    </SafeAreaView>
  )
}

export default Cart

const Styles =StyleSheet.create({
  main:{
    flex:1
  }
})
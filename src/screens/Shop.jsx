import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Category, Header,  } from '../utilites/helper/Helper'


const Shop = (props) => {
  return (
    <SafeAreaView style={Styles.main}>
    <View >
      <Header txt={" Category"} onPress={() => props.navigation.goBack()}/>
      <View style={{marginTop:40}}>
      <Category Source={require("../utilites/images/14.png")} txt={"Men"} onPress={()=>props.navigation.navigate('Man')}/>
      <Category Source={require("../utilites/images/11.png")} txt={"Women"} onPress={()=>props.navigation.navigate('Women')}/>
      <Category Source={require("../utilites/images/100.png")} txt={"Kids"}/>
      </View>
    
    </View>
    </SafeAreaView>
  )
}

export default Shop

const Styles = StyleSheet.create({
  main:{
    flex:1,
  
  }
})
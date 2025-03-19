import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header, Orders, width, } from '../utilites/helper/Helper'

const Profile = (props) => {
  return (
    <SafeAreaView style={Styles.main}>
      <Header txt={"My Profile"} onPress={() => props.navigation.goBack()}/>
    <View style={{padding:20}}>
<View style={Styles.V1}>
  <View>
    <TouchableOpacity>
  <Image source={require("../utilites/images/ava.png")} style={Styles.img}/>
  {/* <Image source={require("../utilites/images/pencil.png")} style={Styles.img}/> */}
  </TouchableOpacity>
  </View>
   <Text style={Styles.txt}>Jenny</Text>
</View>
<View style={{marginTop:40}}>
  <Orders txt={"My orders"}/>
  <Orders txt={"Shipping addresses"}/>
  <Orders txt={"Payment methods"}/>
  <Orders txt={"Promocodes"}/>
  <Orders txt={"Settings"}/>
</View>
  
    </View>
    </SafeAreaView>
  )
}

export default Profile

const Styles = StyleSheet.create({
  main:{
    flex:1
  },
  img:{
    height:70,
    width:70,
    
  },
  V1:{
    flexDirection:'row',
    alignItems:'center',
  
    justifyContent:'space-between',
    width:width/2.2
    
  },
  txt:{
    fontSize:30,
    fontWeight:'600'
  }
})
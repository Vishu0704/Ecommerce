import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={Styles.drawerItems}>
      <TouchableOpacity>
  <Image source={require("../utilites/images/ava.png")} style={Styles.img}/>
  <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:20}}>Jenny</Text>
 
  </TouchableOpacity>
        <DrawerItem
          label="Home"
          activeTintColor='red'
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Profile"
          activeTintColor='red'
          onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
          label="Shop"
          activeTintColor='red'
          onPress={() => props.navigation.navigate('Shop')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const Styles = StyleSheet.create({
  drawerItems: {
    marginTop: 0,
  
  }, img:{
    height:130,
    width:130,
    
    alignSelf:'center'
  },
});

export default CustomDrawer;

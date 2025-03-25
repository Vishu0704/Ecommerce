import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerItems}>
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Profile"
          onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
          label="Shop"
          onPress={() => props.navigation.navigate('Shop')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerItems: {
    marginTop: 20,
  },
});

export default CustomDrawer;

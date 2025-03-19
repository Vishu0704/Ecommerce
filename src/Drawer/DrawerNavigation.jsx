import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Stacks from '../routes/Stacks';
import Profile from '../screens/Profile';
import BottomNavigation from '../bottom/BottomNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Stacks}  options={{headerShown:false}}/>
        <Drawer.Screen name="Profile" component={BottomNavigation}   initialParams={{ screen: 'Profile' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

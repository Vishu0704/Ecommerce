import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Stacks from '../routes/Stacks';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Stacks} />
        <Drawer.Screen name="Profile" component={Stacks} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

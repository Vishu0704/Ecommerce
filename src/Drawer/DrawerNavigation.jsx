import React, { useEffect } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Stacks from '../routes/Stacks';
import BottomNavigation from '../bottom/BottomNavigation';
import CustomDrawer from './CustomDrawer';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator  drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={Stacks}  options={{headerShown:false}}/>
        <Drawer.Screen name="Profile" component={BottomNavigation} options={{headerShown:false}}  initialParams={{ screen: 'Profile' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

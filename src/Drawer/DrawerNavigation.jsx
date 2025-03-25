import React, { useEffect } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from '../bottom/BottomNavigation';
import CustomDrawer from './CustomDrawer';
import Man from '../screens/Man';
import Details from '../screens/Details';
import Home from '../screens/Home';
import Items from '../screens/Items';
import Cart from '../screens/Cart';
import Womens from '../screens/Womens';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator  drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={BottomNavigation}  options={{headerShown:false}} initialParams={{screen:'Home'}}/>
        <Drawer.Screen name="Profile" component={BottomNavigation} options={{headerShown:false}} initialParams={{screen:'Profile'}}/>
        <Drawer.Screen name="Shop" component={BottomNavigation} options={{headerShown:false}}  initialParams={{screen:'Shop'}}/>
        <Drawer.Screen name="Man" component={Man} options={{headerShown:false}}  />
        <Drawer.Screen name="Details" component={Details} options={{headerShown:false}}/>
        <Drawer.Screen name="Home1" component={Home} options={{headerShown:false}}/>
        <Drawer.Screen name="Items" component={Items} options={{headerShown:false}}/>
        <Drawer.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
        <Drawer.Screen name="Women" component={Womens} options={{headerShown:false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {Image} from 'react-native';
import Shop from '../screens/Shop';
import Cart from '../screens/Cart';
import Favorite from '../screens/Favorite';

const Bottom = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          width: '100%',
          alignSelf: 'center',
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../utilites/images/1.png')}
              style={{
                height: 35,
                width: 25,
                tintColor: focused ? 'red' : 'black',
              }}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../utilites/images/2.png')}
              style={{
                height: 35,
                width: 25,
                tintColor: focused ? 'red' : 'black',
              }}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../utilites/images/3.png')}
              style={{
                height: 35,
                width: 25,
                tintColor: focused ? 'red' : 'black',
              }}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../utilites/images/4.png')}
              style={{
                height: 35,
                width: 35,
                tintColor: focused ? 'red' : 'black',
              }}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../utilites/images/5.png')}
              style={{
                height: 35,
                width: 25,
                tintColor: focused ? 'red' : 'black',
              }}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;

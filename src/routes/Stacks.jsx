import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomNavigation from '../bottom/BottomNavigation';
import Details from '../screens/Details';
import Items from '../screens/Items';
import Man from '../screens/Man';
import Womens from '../screens/Womens';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={BottomNavigation} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Items" component={Items} />
        <Stack.Screen name="Man" component={Man} />
        <Stack.Screen name="Women" component={Womens} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default Stacks;

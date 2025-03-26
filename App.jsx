import './gesture-handler.native';
import React from 'react';
import DrawerNavigation from './src/Drawer/DrawerNavigation';
import {Provider} from 'react-redux';
import {mystore} from './Redux/MyStore';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()
const App = () => {
  return (
    <Provider store={mystore}>
      <DrawerNavigation />
    </Provider>
  );
};

export default App;

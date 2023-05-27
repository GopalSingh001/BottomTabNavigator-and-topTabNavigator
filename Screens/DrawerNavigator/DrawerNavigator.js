import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './About';
import Information from './Information';
 
const Drawer=createDrawerNavigator();

const DrawerNavigator = () => {
  <Drawer.Navigator  useLegacyImplementation={true} initialRouteName='About' screenOptions={{headerShown:true}}>
    <Drawer.Screen name='About' component={About}/>
    <Drawer.Screen name='Information' component={Information}/>
  </Drawer.Navigator>
}

export default DrawerNavigator; 

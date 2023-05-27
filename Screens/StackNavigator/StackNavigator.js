import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeStack from './HomeStack';
import InfoStack from './InfoStack';


const Stack=createStackNavigator();
const StackNavigator = () => {
  return (
     <Stack.Navigator screenOptions={{headerShown:true}}>

        <Stack.Screen name='Home' component={HomeStack} />

        <Stack.Screen name='Info' component={InfoStack}/>
        


     </Stack.Navigator>
  );
}

export default StackNavigator;

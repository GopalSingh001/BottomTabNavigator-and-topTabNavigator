import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import FirstDetails from './FirstDetails';
import SecondDetails from './SecondDetails';


const Toptabs = createMaterialTopTabNavigator();
const DetailsTopTabNavigator = () => {
    return (
        <Toptabs.Navigator
           
            initialRouteName="First"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: 'powderblue' }
            }}
        >
            <Toptabs.Screen
                name='First'
                component={FirstDetails}
                options={{ tabBarLabel: 'First' }}
            />

            <Toptabs.Screen
                name='second'
                component={SecondDetails}
                options={{ tabBarLabel: 'Second' }}
            />


        </Toptabs.Navigator>
    );
}

export default DetailsTopTabNavigator;

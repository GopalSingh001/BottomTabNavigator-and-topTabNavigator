import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import FirstFavourite from './FirstFavourite';
import SecondFavourite from './SecondFavourite';


const Toptabs = createMaterialTopTabNavigator();
const FavouriteTopTabNavigator = () => {
    return (
        <Toptabs.Navigator
            initialRouteName="First"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: 'powderblue'},
            }}>
            <Toptabs.Screen
                name='First'
                component={FirstFavourite}
                options={{ tabBarLabel: 'First' }}
            />
            <Toptabs.Screen
                name='Second'
                component={SecondFavourite}
                options={{ tabBarLabel: 'Second' }}
            />


        </Toptabs.Navigator>
    );
}

export default FavouriteTopTabNavigator;

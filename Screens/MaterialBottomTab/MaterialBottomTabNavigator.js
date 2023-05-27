import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Details from './Details';
import Favorites from './Favorites';

const Tabs = createMaterialBottomTabNavigator();
const MaterialBottomTabNavigator = () => {
    return (
        <Tabs.Navigator
            initialRouteName='Home'
            barStyle={{ backgroundColor: 'pink' }}
            activeColor='black'
            shifting='true'
            inactiveColor='grey'>
            <Tabs.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tabs.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />

            <Tabs.Screen
                name='Details'
                component={Details}
                options={
                    {
                        tabBarLabel: 'Details',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name='details' color={color} size={26} />
                        )
                    }
                }
            />

            <Tabs.Screen
                name='Favorites'
                component={Favorites}
                options={
                    {
                        tabBarLabel: 'Favorites',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name='cards-heart' color={color} size={26} />
                        )
                    }
                }
            />
        </Tabs.Navigator>
    );
}

export default MaterialBottomTabNavigator;

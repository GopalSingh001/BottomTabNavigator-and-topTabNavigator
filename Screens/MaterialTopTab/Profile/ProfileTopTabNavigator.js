import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import FirstProfile from './FirstProfile';
import SecondProfile from './SecondProfile';

const TopTabs = createMaterialTopTabNavigator();
const ProfileTopTabNavigator = () => {

    
    return (
        <TopTabs.Navigator
            initialRouteName="First"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: 'powderblue'},
            }}
        >
            <TopTabs.Screen
                name='First'
                component={FirstProfile}
                options={{ tabBarLabel: 'First' }} 
                />
            <TopTabs.Screen
                name='Second'
                component={SecondProfile}
                options={{ tabBarLabel: 'Second' }}
                 />

        </TopTabs.Navigator>
    );
}

export default ProfileTopTabNavigator;

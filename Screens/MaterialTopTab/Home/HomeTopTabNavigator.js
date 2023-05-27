import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import FirstHome from './FirstHome';
import SecondHome from './SecondHome';
import ThirdHome from './ThirdHome';


const TopTabs = createMaterialTopTabNavigator();

const HomeTopTabNavigator = () => {
    return (
        <TopTabs.Navigator
            initialRouteName="First"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: 'powderblue' },
            }}>
            <TopTabs.Screen
                name='First'
                component={FirstHome}
                options={{ tabBarLabel: 'First' }} />
            <TopTabs.Screen
                name='Second'
                component={SecondHome}
                options={{ tabBarLabel: 'Second' }} />
            <TopTabs.Screen

                name='Third'
                component={ThirdHome}
                options={{ tabBarLabel: 'Third' }} />

        </TopTabs.Navigator>
    );
}

export default HomeTopTabNavigator;

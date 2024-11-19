import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileUserScreen } from '../screens/User/ProfileUserScreen';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}} >
            <Tab.Screen name="Profile" component={ProfileUserScreen} />
        </Tab.Navigator>
    );
}

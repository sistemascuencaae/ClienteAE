import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabUserNavigation from './TabUserNavigation';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Home" component={HomeScreen}
                options={{
                    title: 'Inicio'
                }}
            />
            <Stack.Screen name="TabUserNavigation" component={TabUserNavigation}
                options={{
                    title: 'Mi espacio',
                }}
            />
        </Stack.Navigator>
    );
};

export default MainNavigation;

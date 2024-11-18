import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/User/LoginScreen';
import RegistroScreen from '../screens/User/RegistroScreen';

const Stack = createNativeStackNavigator();

export default function UserNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false }}/>
            <Stack.Screen name="Register" component={RegistroScreen} />
        </Stack.Navigator>
    );
}

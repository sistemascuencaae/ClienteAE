import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabUserNavigation from './TabUserNavigation';
import HomeScreen from '../screens/HomeScreen';
import ModalPuntosPago from '../screens/user/components/ModalPuntosPago';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <>
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
        </>

    );
};

export default MainNavigation;

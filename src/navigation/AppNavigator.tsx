import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import TabsNavigator from "./TabsNavigator";

// Definir las rutas
type RootStackParamList = {
    Home: undefined;
    TabsNavigator: undefined;
};

// Crear el Stack con tipos
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
        </Stack.Navigator>
    );
}

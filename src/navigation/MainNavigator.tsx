import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserNavigation from './UserNavigation';
import AppNavigator from './AppNavigator';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await AsyncStorage.getItem('user'); // Intenta recuperar los datos del usuario
        setIsLoggedIn(!!user); // Si existe el usuario, se establece como logueado
      } catch (error) {
        console.error('Error checking user:', error);
      } finally {
        setIsLoading(false); // Deja de mostrar el indicador de carga
      }
    };

    checkUser();
  }, []);

  if (isLoading) {
    // Mientras carga, muestra un indicador
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'AppNavigator' : 'UserNavigation'}
        screenOptions={{
          headerTintColor: '#000000',
        }}
      >
        <Stack.Screen
          name="UserNavigation"
          component={UserNavigation}
          options={{ title: 'Usuario Almacenes España' }}
        />
        <Stack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{ title: 'Registro usuario' }}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

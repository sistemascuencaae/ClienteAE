import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper'

type RootStackParamList = {
  Register: undefined; 
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  function navegar(ruta: keyof RootStackParamList) {
    navigation.navigate(ruta);
  }


  return (
    <View>
      <TouchableOpacity onPress={() => navegar('Register')}>
        <Text>Registrarse</Text>
      </TouchableOpacity>
    </View>
  )
}

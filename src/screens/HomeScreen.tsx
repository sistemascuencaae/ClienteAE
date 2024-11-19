import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../store/slice/userSlice";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppDispatch } from "../store";

// Tipo de rutas
type RootStackParamList = {
  Home: undefined;
  TabsNavigator: undefined;
};

// Tipo de props para HomeScreen
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
  };

  const navegar = (ruta: keyof RootStackParamList) => {
    navigation.navigate(ruta);
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
      <Button
        title="Go to TabsNavigator"
        onPress={() => navegar('TabsNavigator')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

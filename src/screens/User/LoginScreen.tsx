// screens/LoginScreen.tsx
import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { login } from "../../store/slice/userSlice";

export const LoginScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    const fakeToken = "abc123"; // Simula un token generado
    dispatch(login({ token: fakeToken }));
  };

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={handleLogin} />
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
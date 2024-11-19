// screens/HomeScreen.tsx
import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { AppDispatch } from "../store";

export const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
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

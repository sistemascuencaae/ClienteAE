// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./src/store";
import { LogBox } from 'react-native';
import { MainNavigator } from "./src/navigation/MainNavigator";



export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
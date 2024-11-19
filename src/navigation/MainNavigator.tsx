import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import AppNavigator from "./AppNavigator";
import UserNavigation from "./UserNavigation";

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
      ) : (
        <Stack.Screen name="UserNavigator" component={UserNavigation} />
      )}
    </Stack.Navigator>
  );
};
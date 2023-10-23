import { createStackNavigator } from "@react-navigation/stack";
import Login from "../features/Login/Login.view";
import { AppNavigatorType } from "./types";
import { StatusBar } from "react-native";
import TabNavigator from "./TabNavigator";
import ProfileDetail from "../features/ProfileDetail/ProfileDetail.view";
import { useAuthStore } from "../zustand";
import { NavigationHeader } from "../components";

const Stack = createStackNavigator<AppNavigatorType>();

const AppNavigator = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Tabs"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileDetail"
              component={ProfileDetail}
              options={{ header: () => <NavigationHeader name="Contacto" /> }}
            />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};

export default AppNavigator;

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Username from "../screens/Login/Username";
import Password from "../screens/Login/Password";
import AppBottomRoutes from "./bottom.routes";
import AuthUser from "../context/Auth/Provider";
import useAuth from "../context/Auth/UseAuth";

const Stack = createStackNavigator();

const AppStackRoutes = () => {
  const { signed } = useAuth();

  return (
    <AuthUser value={{ signed }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Username"
      >
        <Stack.Screen name="Username" component={Username} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="BottomNav" component={AppBottomRoutes} />
      </Stack.Navigator>
    </AuthUser>
  );
};

export default AppStackRoutes;

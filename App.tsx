import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "./src/global/styles/theme";
import AppRoutes from "./src/routes/app.routes";

import Home from "./src/screens/Home";

const App = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default App;

import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStackRoutes from "./src/routes/stack.routes";
import AppBottomRoutes from "./src/routes/bottom.routes";
import useAuth from "./src/context/Auth/UseAuth";

const App = () => {
  const { signed } = useAuth();

  const value = () => {
    if (signed === true) {
      return true;
    }
  };

  useEffect(() => {
    value();
  }, []);

  return (
    <NavigationContainer>
      {signed === false ? <AppStackRoutes /> : <AppBottomRoutes />}
    </NavigationContainer>
  );
};

export default App;

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import Wrapper from "../../components/Wrapper";

import { styles } from "./styles";
import theme from "../../global/styles/theme";
import Balance from "../../components/Balance";
import Dashboard from "../../components/Dashboard";

const Home = () => {
  return (
    <View style={styles.container}>
      <Wrapper />
      <View style={styles.iconsContainer}>
        <Fontisto name="doctor" size={42} color={theme.colors.primary} />
        <SimpleLineIcons
          name="location-pin"
          size={42}
          color={theme.colors.primary}
        />
      </View>

      <Balance />

      <Dashboard />
      <Text style={{ color: "black" }}>Starting Challenge!</Text>
    </View>
  );
};

export default Home;

import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import theme from "../../global/styles/theme";
import { styles } from "./styles";

const Wrapper = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.primary} />
      <Feather name="menu" size={32} color={theme.colors.white} />
      <Text style={styles.title}>Carteira Digital</Text>
      <Ionicons
        name="notifications-outline"
        size={32}
        color={theme.colors.white}
      />
    </View>
  );
};

export default Wrapper;

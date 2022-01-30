import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import theme from "../../global/styles/theme";
import { styles } from "./styles";

const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Saldo Disponível</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceValue}>R$ 22,50</Text>
          <Ionicons
            name="ios-eye-outline"
            size={32}
            color={theme.colors.primary}
          />
        </View>
      </View>
      <Text style={styles.description}>
        Esse é o valor total de cashback, depósitos, pagamentos e transferências
        recebidas
      </Text>
    </View>
  );
};

export default Balance;

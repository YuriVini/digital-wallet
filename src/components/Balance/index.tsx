import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import theme from "../../global/styles/theme";
import { styles } from "./styles";
import { getMyBalance } from "../../services/DigitalWalletAPI";

const Balance = () => {
  const [balance, setBalance] = useState(0);

  const initialBalance = async () => {
    try {
      const { data } = await getMyBalance();
      setBalance(data.saldo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initialBalance();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Saldo Disponível</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceValue}>R${balance},00</Text>
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

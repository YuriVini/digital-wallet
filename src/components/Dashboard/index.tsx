import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

const Dashboard = () => {
  return (
    <View style={styles.dashboardContainer}>
      <TouchableOpacity>
        <Text style={styles.text}>Tudo</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Entrada</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Saída</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Futuro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

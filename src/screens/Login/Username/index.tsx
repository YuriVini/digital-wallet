import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Buttons from "../../../components/Button";

import { styles } from "./styles";

const Username = ({ navigation }: StackScreenProps<ParamListBase>) => {
  const [username, setUsername] = useState("");

  const goToPassword = () => {
    if (username !== "")
      navigation.navigate("Password", { paramKey: username });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entre com seu username</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />

      <Buttons title="Confirmar" onPress={goToPassword} />
    </View>
  );
};

export default Username;

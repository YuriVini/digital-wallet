import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Buttons from "../../../components/Button";
import useAuth from "../../../context/Auth/UseAuth";
import { postLogin } from "../../../services/DigitalWalletAPI";

import { styles } from "./styles";

const Password = ({ route, navigation }: any) => {
  const [password, setPassword] = useState("");
  const username = route.params.paramKey;

  const { addUser, user } = useAuth();

  const login = async () => {
    if (password !== "") {
      await postLogin(username, password)
        .then((data) => {
          data.status;
          const obj = { username, password };
          addUser(obj);
          navigation.navigate("BottomNav");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entre com sua senha</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
      />

      <Buttons title="Entrar" onPress={login} />
      <TextInput />
    </View>
  );
};

export default Password;

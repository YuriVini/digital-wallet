import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  title: string;
};

const Buttons = ({ onPress, title, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

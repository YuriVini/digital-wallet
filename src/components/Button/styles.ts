import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    backgroundColor: theme.colors.primary,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 2,

    marginHorizontal: 20,
  },
  buttonTitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.white,
  },
});

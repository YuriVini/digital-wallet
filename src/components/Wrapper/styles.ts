import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 70,

    backgroundColor: theme.colors.primary,

    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",

    marginTop: 34,
    paddingHorizontal: 20,
  },
  title: {
    color: theme.colors.white,
    fontSize: 18,
  },
});

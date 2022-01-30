import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    paddingHorizontal: 80,
  },
  textContainer: {},
  title: {
    fontSize: 12,
    fontWeight: "bold",

    textAlign: "left",
    color: theme.colors.primary,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 10,
  },
  balanceValue: {
    fontSize: 42,
    fontWeight: "bold",

    marginRight: 10,
  },
  description: {
    fontSize: 10,
    fontWeight: "bold",

    textAlign: "center",
  },
});

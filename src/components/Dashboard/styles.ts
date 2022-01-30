import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  dashboardContainer: {
    height: 70,
    backgroundColor: theme.colors.primary,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 30,
  },
  text: {
    fontSize: 16,

    color: theme.colors.white,

    marginHorizontal: 20,
  },
});

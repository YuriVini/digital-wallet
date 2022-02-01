import { StyleSheet } from "react-native";
import theme from "../../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: theme.colors.primary,

    borderBottomWidth: 3,
    borderBottomColor: theme.colors.green,

    paddingVertical: 20,
    marginTop: 50,
    marginHorizontal: 20,
  },
  textInput: {
    height: 70,

    borderBottomWidth: 3,
    borderBottomColor: theme.colors.grayLight,

    marginTop: 50,
    marginBottom: 260,
    marginHorizontal: 20,
  },
});

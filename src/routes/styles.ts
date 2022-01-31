import { Platform, StyleSheet } from "react-native";
import theme from "../global/styles/theme";

export const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    marginTop: 16,
  },
  container: {
    position: "relative",
    width: 85,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  button: {
    top: -25,
    justifyContent: "center",
    alignItems: "center",
    width: 58,
    height: 58,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    ...Platform.select({
      android: { elevation: 5 },
      ios: {
        shadowColor: theme.colors.primary,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 7,
      },
    }),
  },
  text: {
    fontSize: 10,
    textAlign: "center",
  },
});

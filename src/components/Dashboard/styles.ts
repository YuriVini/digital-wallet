import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: theme.colors.primary,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 30,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",

    marginHorizontal: 20,
  },
  tabTitle: {
    fontSize: 16,

    color: theme.colors.white,

    marginVertical: 10,
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "center",
    color: theme.colors.primary,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  listTextContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grayLight,
  },
  listTextContainer: {
    paddingVertical: 10,
    alignContent: "flex-start",
    justifyContent: "space-around",
  },
  listTitle: {
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 7,
  },
  listSubtitle: {
    color: theme.colors.textLight,
    fontSize: 10,
    textAlign: "right",
  },
});

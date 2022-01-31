import React from "react";
import { Platform, Text, View } from "react-native";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import theme from "../global/styles/theme";
import { styles } from "./styles";

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.grayLight,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarStyle: {
          height: 68,
          justifyContent: "center",
          backgroundColor: theme.colors.primary,
        },
      }}
    >
      <Screen
        name="Início"
        component={Home}
        options={{
          tabBarLabelStyle: { color: theme.colors.primary },
          tabBarIcon: ({ color }) => (
            <View style={styles.content}>
              <MaterialCommunityIcons
                name="home-outline"
                size={32}
                color={color}
              />
              <Text style={[styles.text, { color: color }]}>Início</Text>
            </View>
          ),
        }}
      />
      <Screen
        name="Transações"
        component={Home}
        options={{
          tabBarLabelStyle: { color: theme.colors.primary },
          tabBarIcon: ({ color }) => (
            <View style={styles.content}>
              <AntDesign name="creditcard" size={32} color={color} />
              <Text style={[styles.text, { color: color }]}>Transações</Text>
            </View>
          ),
        }}
      />
      <Screen
        name="Pagar"
        component={Home}
        options={{
          tabBarLabelStyle: { color: theme.colors.primary },
          tabBarIcon: ({ color }) => (
            <View style={styles.container}>
              <View style={styles.button}>
                <FontAwesome name="dollar" size={32} color={color} />
                <Text style={[styles.text, { color: color }]}>Pagar</Text>
              </View>
            </View>
          ),
        }}
      />
      <Screen
        name="Meus Cartões"
        component={Home}
        options={{
          tabBarLabelStyle: { color: theme.colors.primary },
          tabBarIcon: ({ color }) => (
            <View style={styles.content}>
              <AntDesign name="wallet" size={32} color={color} />
              <Text style={[styles.text, { color: color }]}>Meus Cartões</Text>
            </View>
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={Home}
        options={{
          tabBarLabelStyle: { color: theme.colors.primary },
          tabBarIcon: ({ color }) => (
            <View style={styles.content}>
              <Ionicons name="ios-person-outline" size={32} color={color} />
              <Text style={[styles.text, { color: color }]}>Perfil</Text>
            </View>
          ),
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;

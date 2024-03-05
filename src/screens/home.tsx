import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./dashboard";
import Profile from "./profile";
import Investiment from "./investiment";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#101010",
          borderTopWidth: 0,

          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 25,
          elevation: 0,
          height: 55,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white'
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }

            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Statistics"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="bar-chart" size={size} color={color} />;
            }

            return (
              <Ionicons name="bar-chart-outline" size={size} color={color} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Investiment"
        component={Investiment}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="repeat" size={size} color={color} />;
            }

            return <Ionicons name="repeat-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />;
            }

            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

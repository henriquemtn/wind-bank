import React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Welcome from "../screens/welcome";
import SignIn from "../screens/signin";
import Home from "../screens/home";
import SignUp from "../screens/signup";

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function Router() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

import { View, Text, StatusBar, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/router";

import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/Button";

export default function SignIn() {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  function handleSignIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        alert("logado com sucesso");
        console.log(result);
        navigation.navigate("Home");
      })
      .catch((error) => alert(error));
  }
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <StatusBar barStyle="light-content" />

      <View className="w-full">
        <Text className="text-black font-bold text-xl">
          Login in to your account
        </Text>
        <Text className="text-[#909090] text-base mb-10">
          Welcome back! Please enter your details!
        </Text>
      </View>

      <Text className="text-black mb-2 w-full">Email</Text>
      <View className="flex flex-row items-center px-4 w-full h-10 bg-white rounded-md mb-8 border border-[#D2D2D2]">
        <FontAwesome name="envelope-o" size={24} color="black" />
        <TextInput
          className="text-black ml-4"
          placeholderTextColor="#D2D2D2"
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <Text className="text-black mb-2 w-full">Password</Text>
      <View className="flex flex-row items-center px-4 w-full h-10 bg-white rounded-md mb-8 border border-[#D2D2D2]">
        <FontAwesome name="lock" size={24} color="black" />
        <TextInput
          className="text-black ml-4"
          placeholderTextColor="#D2D2D2"
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button blue title="Log In" onPress={handleSignIn} />
      <Button
        outline
        title="Continue with Google"
        onPress={() => console.log("login com google")}
      />

      <View className="flex flex-row mt-2">
        <Text className="text-black text-[13px]">Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text className="text-[#0066FF] text-[13px] ml-1">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

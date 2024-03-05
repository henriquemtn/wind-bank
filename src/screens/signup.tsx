import { View, Text, StatusBar, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/router";

import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/Button";

export default function SignUp() {
  const navigation = useNavigation<StackTypes>();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  function handleSignUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (result) => {
        // Define o displayName
        await result.user?.updateProfile({
          displayName: displayName
        });
        alert("logado com sucesso");
        console.log(result);
        navigation.navigate("Home");
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
}

  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <StatusBar barStyle="light-content" />

      <View className="w-full">
        <Text className="text-black font-bold text-xl">
          Create a new account
        </Text>
        <Text className="text-[#909090] text-base mb-10">
          Let's go! Please enter your details!
        </Text>
      </View>

      <Text className="text-black mb-2 w-full">Your Name</Text>
      <View className="flex flex-row items-center px-4 w-full h-10 bg-white rounded-md mb-8 border border-[#D2D2D2]">
        <FontAwesome name="user" size={24} color="black" />
        <TextInput
          className="text-black ml-4"
          placeholderTextColor="#D2D2D2"
          placeholder="Enter your full name"
          onChangeText={(text) => setDisplayName(text)}
        />
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

      <Button blue title="Sign Up" onPress={handleSignUp} />
      <Button
        outline
        title="Continue with Google"
        onPress={() => console.log("login com google")}
      />

      <View className="flex flex-row mt-2">
        <Text className="text-black text-[13px]">Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text className="text-[#0066FF] text-[13px] ml-1">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

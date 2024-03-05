import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/router";

export default function Welcome() {
  const navigation = useNavigation<StackTypes>();

  return (
    <View className="bg-white flex-1 w-full items-center">
      <View className="h-1/2 w-full justify-center items-center">
        <Image
          className="flex-1 w-full"
          source={require("../../assets/welcome.png")}
          resizeMode="cover"
        />
      </View>

      <View className="px-5 mt-4 w-full">
        <Text className="text-4xl font-bold">
          Innovative Digital Financial Planner and Management Money
        </Text>
        <Text className="text-[18px] text-[#606060] mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <View className="flex justify-center items-center mt-10">
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')} className="w-full bg-[#222222] p-4 rounded-full items-center">
            <Text className="font-bold text-white text-base">Get Started</Text>
          </TouchableOpacity>
          <View className="w-full flex-row justify-center mt-2">
            <Text className="">Already have account?</Text>
            <Text className="ml-1 text-[#2A63E2]">Login</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

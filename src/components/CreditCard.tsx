import { View, Text, Image } from "react-native";
import React from "react";
import auth from "@react-native-firebase/auth";

export default function CreditCard() {
  const user = auth().currentUser;

  return (
    <View className="w-full h-[200px] flex flex-row bg-[#222222] rounded-[20px] mt-4">
      <View className="w-4/5 px-4 py-4  justify-between h-full">
        <Text className="text-xl text-white font-semibold">Wind</Text>
        <View className="w-full items-center">
          <View className="flex flex-row justify-between items-center w-full">
            {user && (
              <Text className="text-white font-semibold text-base">
                {user.displayName}
              </Text>
            )}
            <Text className="text-white font-semibold text-base">03/2025</Text>
          </View>
          <Text className="text-[23px] text-justify w-full text-white font-semibold">
            1234  5678  9101  1112
          </Text>
        </View>
      </View>
      <View className="absolute h-full right-0 w-1/5 rounded-r-[20px] justify-between py-4 items-center bg-[#2F2F2F]">
      <Image 
        source={require("../../assets/paypass.png")}
        />
        <Image 
        source={require("../../assets/Mastercard.png")}
        />
      </View>
    </View>
  );
}

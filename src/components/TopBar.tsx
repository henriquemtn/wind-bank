import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import auth from "@react-native-firebase/auth";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TopBar() {
  const user = auth().currentUser;

  return (
    <View className="flex flex-row justify-between w-full mt-5">
      <View className="flex flex-row gap-2 items-center">
        <Image
          source={require("../../assets/avatar.jpg")}
          className="w-[55px] h-[55px] rounded-full"
        />
        <View>
          <Text className="text-[#D6D6D6] text-base">Welcome back,</Text>
          {user && (
            <Text className="text-white font-semibold text-xl">
              {user.displayName}
            </Text>
          )}
        </View>
      </View>

      <View>
        <TouchableOpacity className="bg-[#2F2F2F] w-[55px] h-[55px] rounded-md justify-center items-center">
          <FontAwesome5 name="bell" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

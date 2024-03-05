import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import React from "react";
import TopBar from "../components/TopBar";
import CreditCard from "../components/CreditCard";
import { Ionicons } from "@expo/vector-icons";
import User from "../components/User";

export default function Dashboard() {
  return (
    <View className="bg-[#181818] flex-1 relative w-full">
      <View className="p-5">
        <TopBar />
        <CreditCard />
        <View className="w-full flex flex-row justify-around h-[55px] mt-6 mb-6">
          <View className="items-center ">
            <TouchableOpacity className="bg-[#2F2F2F] w-[55px] h-[55px] rounded-md justify-center items-center">
              <Ionicons name="wallet-outline" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white text-base font-medium">Send</Text>
          </View>

          <View className="items-center ">
            <TouchableOpacity className="bg-[#2F2F2F] w-[55px] h-[55px] rounded-md justify-center items-center">
              <Ionicons name="wallet-outline" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white text-base font-medium">Request</Text>
          </View>

          <View className="items-center ">
            <TouchableOpacity className="bg-[#2F2F2F] w-[55px] h-[55px] rounded-md justify-center items-center">
              <Ionicons name="wallet-outline" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white text-base font-medium">Top Up</Text>
          </View>
        </View>
      </View>

      <View className=" bg-white h-full rounded-t-[25px] p-5">
        <Text className="font-medium text-black text-xl mb-4">Quick Send</Text>
        <View className="flex flex-row w-full justify-around">
          <View className="flex flex-col items-center justify-center">
            <Image
              className="w-[50px] h-[50px]"
              source={require("../../assets/add.png")}
            />
            <Text className="mt-1">Add</Text>
          </View>
          <User />
          <User />
          <User />
          <User />
        </View>

        <Text className="font-medium text-black text-xl my-4">Recent activity</Text>
      </View>
    </View>
  );
}

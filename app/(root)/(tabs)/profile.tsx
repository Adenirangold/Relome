import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";

const profile = () => {
  const handleLogout = async () => {};
  return (
    <SafeAreaView className="h-full bg-white ">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center mt-5 justify-between">
          <Text className="font-rubik-bold text-xl">Profile</Text>
          <Image className="size-5 " source={icons.bell}></Image>
        </View>
        <View className="flex-row justify-center flex mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              className="size-44 relative rounded-full"
              source={images.avatar}
            ></Image>
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image
                className="size-9"
                resizeMode="contain"
                source={icons.edit}
              ></Image>
            </TouchableOpacity>
            <Text className="text-2xl font-rubik-bold mt-2">Gold|Adeniran</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

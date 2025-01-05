import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

interface props {
  onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="h-80 w-60 relative flex flex-col items-start"
    >
      <Image source={images.japan} className="size-full rounded-2xl"></Image>
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      ></Image>
      <View className=" flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image className="size-3.5" source={icons.star}></Image>
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          4.4
        </Text>
      </View>
      <View className=" flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          numberOfLines={1}
          className="text-xl font-rubik-extrabold text-white"
        >
          Modern Apartment
        </Text>
        <Text className="text-base font-rubik text-white">
          No 4 Ikorodu, Lagos State
        </Text>
        <View className="flex flex-row items-center w-full justify-between">
          <Text className="text-white text-xl font-rubik-extrabold">
            $2,250
          </Text>
          <Image className="size-5" source={icons.heart}></Image>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = () => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  );
};

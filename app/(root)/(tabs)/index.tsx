import { Card, FeaturedCard } from "@/components/Card";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import {} from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="px-5">
        <View className=" flex flex-row items-center justify-between mt-5 ">
          <View className="flex flex-row items-center ">
            <Image
              className="size-12 rounded-full"
              source={images.avatar}
            ></Image>
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">
                Good Morning
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                ADENIRAN GOLD
              </Text>
            </View>
          </View>
          <View>
            <Image source={icons.bell} className="size-6"></Image>
          </View>
        </View>
        <Search></Search>
        <View className="my-5">
          <View className="flex flex-row items-center justify-between ">
            <Text className="text-xl font-rubik-bold text-black-300">
              Featured
            </Text>
            <TouchableOpacity className="">
              <Text className="font-rubik-bold text-base text-primary-300">
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row gap-5 mt-5">
            <FeaturedCard></FeaturedCard>
            <FeaturedCard></FeaturedCard>
          </View>
        </View>
        <View className="flex flex-row items-center justify-between ">
          <Text className="text-xl font-rubik-bold text-black-300">
            Our Reccommendation
          </Text>
          <TouchableOpacity className="">
            <Text className="font-rubik-bold text-base text-primary-300">
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row gap-5 mt-5">
          <Card></Card>
          <Card></Card>
        </View>
      </View>
    </SafeAreaView>
  );
}

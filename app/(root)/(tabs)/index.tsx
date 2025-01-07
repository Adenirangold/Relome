import { Card, FeaturedCard } from "@/components/Card";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import seed from "@/lib/seed";
import { Link } from "expo-router";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import {} from "react-native-safe-area-context";

export default function Index() {
  const { user } = useGlobalContext();
  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card></Card>}
        ListHeaderComponent={
          <View className="px-5">
            <View className=" flex flex-row items-center justify-between mt-5 ">
              <View className="flex flex-row items-center ">
                <Image
                  className="size-12 rounded-full"
                  source={{ uri: user?.avatar }}
                ></Image>
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Good Morning
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}
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
              <FlatList
                data={[1, 2, 3, 4]}
                horizontal
                keyExtractor={(item) => item.toString()}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                contentContainerClassName="flex gap-5 mt-5"
                renderItem={({ item }) => <FeaturedCard></FeaturedCard>}
              ></FlatList>
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
            <Filters></Filters>
          </View>
        }
      ></FlatList>
    </SafeAreaView>
  );
}

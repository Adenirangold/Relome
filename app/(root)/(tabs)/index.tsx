import { Card, FeaturedCard } from "@/components/Card";
import Filters from "@/components/Filters";
import Noresult from "@/components/Noresult";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { useAppwrite } from "@/lib/useAppwrite";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

export default function Index() {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data: latestProperties, loading: latestPropertiesLoading } =
    useAppwrite({
      fn: getLatestProperties,
    });
  const {
    data: properties,
    loading: propertiesLoading,
    refetch,
  } = useAppwrite({
    fn: getProperties,
    params: {
      query: params.query,
      filter: params.filter,
      limit: 6,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter,
      query: params.query,
      limit: 6,
    });
  }, [params.query, params.filter]);

  const handleCardPress = (id: string) => {
    router.push(`/properties/${id}`);
  };
  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={properties}
        keyExtractor={(item) => item.$id}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          propertiesLoading ? (
            <ActivityIndicator
              className="text-primary-300"
              size="large"
            ></ActivityIndicator>
          ) : (
            <Noresult></Noresult>
          )
        }
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)}></Card>
        )}
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
              {latestPropertiesLoading ? (
                <ActivityIndicator
                  className="text-primary-300"
                  size="large"
                ></ActivityIndicator>
              ) : !latestProperties || latestProperties.length === 0 ? (
                <Noresult></Noresult>
              ) : (
                <FlatList
                  data={latestProperties}
                  horizontal
                  keyExtractor={(item) => item.$id}
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                  contentContainerClassName="flex gap-5 mt-5"
                  renderItem={({ item }) => (
                    <FeaturedCard
                      item={item}
                      onPress={() => handleCardPress(item.$id)}
                    ></FeaturedCard>
                  )}
                ></FlatList>
              )}
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

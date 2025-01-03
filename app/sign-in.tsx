import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login, logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";

const signIn = () => {
  const { isLogged, user, loading, refetch } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/"></Redirect>;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      // refetch();
      console.log("logged in");
    } else {
      Alert.alert("Error", "Failed To Login");
    }
  };
  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      console.log(result);
    } else {
      Alert.alert("Error", "Failed To Logout");
    }
  };

  return (
    <SafeAreaView className="bg-white h-full ">
      <ScrollView contentContainerClassName="h-full">
        <Image
          resizeMode="cover"
          source={images.onboarding}
          className="h-4/6 w-full"
        ></Image>
        <View className="px-10">
          <Text className=" text-base text-center uppercase font-rubik text-black-200">
            Welcome To Relome
          </Text>
          <Text className="text-3xl text-center font-rubik-bold text-black-300 mt-2">
            Let's get you closer to {"\n"}
            <Text className="text-primary-300">Ideal Home</Text>
          </Text>
          <Text className="text-center text-lg text-black-200 font-rubik mt-12 ">
            Login to Relome with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className=" bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className=" flex-row items-center  justify-center">
              <Image
                resizeMode="contain"
                className="w-5 h-5"
                source={icons.google}
              ></Image>
              <Text className="text-lg font-rubik text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogout}
            className=" bg-white shadow-md shadow-zinc-300 mb-50 rounded-full w-full py-4 mt-5"
          >
            <View className=" flex-row items-center  justify-center">
              <Image
                resizeMode="contain"
                className="w-5 h-5"
                source={icons.google}
              ></Image>
              <Text className="text-lg font-rubik text-black-300 ml-2">
                sign out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageSourcePropType,
  Alert,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";
import { logout } from "@/lib/appwrite";
import { Redirect } from "expo-router";
import { useGlobalContext } from "@/lib/global-provider";

const SettingItems = ({
  icon,
  title,
  onPress,
  showArrow = true,
  textStyle,
}: {
  icon: ImageSourcePropType;
  title: string;
  textStyle?: string;
  showArrow?: boolean;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      className="flex flex-row items-center justify-between py-3"
      onPress={onPress}
    >
      <View className="flex flex-row items-center gap-3">
        <Image className="size-6" source={icon}></Image>
        <Text
          className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}
        >
          {title}
        </Text>
      </View>
      {showArrow && (
        <Image className="size-5" source={icons.rightArrow}></Image>
      )}
    </TouchableOpacity>
  );
};

const profile = () => {
  const { user, refetch } = useGlobalContext();
  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert("Success", "You have been succesfully logged out");
      refetch();
    } else {
      Alert.alert("Error", "An error occurced: unable to log out");
    }
  };
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
              source={{ uri: user?.avatar }}
            ></Image>
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image
                className="size-9"
                resizeMode="contain"
                source={icons.edit}
              ></Image>
            </TouchableOpacity>
            <Text className="text-2xl font-rubik-bold mt-2">{user?.name}</Text>
          </View>
        </View>
        <View className="mt-10 flex-col flex">
          <SettingItems
            icon={icons.calendar}
            title="My Bookings"
          ></SettingItems>
          <SettingItems icon={icons.wallet} title="payment"></SettingItems>
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((setting) => (
            <SettingItems
              key={setting.title}
              icon={setting.icon}
              title={setting.title}
            ></SettingItems>
          ))}
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingItems
            title="Log out"
            showArrow={false}
            icon={icons.logout}
            textStyle="text-danger"
            onPress={handleLogout}
          ></SettingItems>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

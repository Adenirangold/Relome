import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

const TabsIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => {
  return (
    <View className="flex-1 mt-3 flex flex-col items-center">
      <Image
        tintColor={focused ? "#0061FF" : "#666876"}
        resizeMode="contain"
        className="size-6"
        source={icon}
      ></Image>
      <Text
        className={`${
          focused
            ? "text-primary-300 font-rubik-medium"
            : "text-black-200 font-rubik"
        } text-xs capitalize w-full mt-1 text-center`}
      >
        {title}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "#0061FF1A",
          position: "absolute",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabsIcon
              icon={icons.home}
              title="home"
              focused={focused}
            ></TabsIcon>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,

          title: "explore",
          tabBarIcon: ({ focused }) => (
            <TabsIcon
              icon={icons.search}
              title="explore"
              focused={focused}
            ></TabsIcon>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,

          title: "profile",
          tabBarIcon: ({ focused }) => (
            <TabsIcon
              icon={icons.person}
              title="profile"
              focused={focused}
            ></TabsIcon>
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;

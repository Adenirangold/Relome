import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import React from "react";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";

const AppLayout = () => {
  const { isLogged, user, loading, refetch } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex  justify-center items-center">
        <ActivityIndicator
          className="text-primary-300"
          size={"large"}
        ></ActivityIndicator>
      </SafeAreaView>
    );
  }
  if (!isLogged) return <Redirect href="/sign-in"></Redirect>;

  return <Slot></Slot>;
};

export default AppLayout;

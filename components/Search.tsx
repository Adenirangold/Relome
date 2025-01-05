import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, usePathname } from "expo-router";
import icons from "@/constants/icons";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query: string }>();
  //   console.log(params);

  const [search, setSearch] = useState(params.query);

  const handleSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View className="bg-accent-100 border-primary-100 border rounded-lg flex flex-row justify-between items-center px-4 w-full py-2 mt-5">
      <View className="flex flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-5"></Image>
        <TextInput
          value={search}
          placeholder="Search for anything"
          onChangeText={handleSearch}
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
        ></TextInput>
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} className="size-5"></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

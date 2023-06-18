import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      // headerTitle:"test tittle"
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* <Header/> */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-400 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* <SearchBar> */}
      <View className="flex-row space-x-2 items-center content-center pb-3 mx-2">
        <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
          <MagnifyingGlassIcon color="#00CCBB" />
          <TextInput
            placeholder="Resturent and Cousines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />
        {/* featuerd rows */}

        <FeaturedRow
          title={"Featured"}
          description={"paid placement for our partners"}
          featureCategory={"featured"}
        />
        {/* Tasty Discount */}
        <FeaturedRow
          title={"Tasty Dsicount"}
          description={"Everyone's is enjoying this juicy discount"}
          featureCategory={"discount"}
        />

        {/* offers nesr you */}
        <FeaturedRow
          title={"offers near you"}
          description={"why not support your local restorent near you "}
          featureCategory={"offers"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import { ArrowRightIcon}from "react-native-heroicons/outline";
import RestaurentCard from './RestaurentCard';
// import   
export default function FeaturedRow({title,featuredCategory,description}) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccBB" />
      </View>
      <Text className="px-4 text-xs text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal:15}}
        className="pt-4"
       showsHorizontalScrollIndicator={false}
      >
        {/* Restaurent Card */}
        <RestaurentCard
          id={123}
          imgUrl={"https://links.papareact.com/gn7"}
          title="yo shushi !!"
          rating={4.4}
          genre="Japanese"
          address="123 main st"
          short_description={"this is a test dish"}
          dishes={[]}
          long="20"
          lat={0}
        />
        <RestaurentCard
          id={123}
          imgUrl={"https://links.papareact.com/gn7"}
          title="yo shushi !!"
          rating={4.4}
          genre="Japanese"
          address="123 main st"
          short_description={"this is a test dish"}
          dishes={[]}
          long="20"
          lat={0}
        />
      </ScrollView>
    </View>
  );
}
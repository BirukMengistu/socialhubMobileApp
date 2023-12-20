import { useTailwind } from "tailwind-rn";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TTabNavigatorProps } from "../rootNavigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TRootNavigatorProps } from "../rootNavigator/RootNavigator";
import { useLayoutEffect, useState } from "react";
import { Image, Input } from "@rneui/base";

type TProfileProps = CompositeNavigationProp<
  BottomTabNavigationProp<TTabNavigatorProps, "profile">,
  NativeStackNavigationProp<TRootNavigatorProps>
>;

const ProfileScreen = () => {
  const [input, setInput]= useState<string>('')
  const tw = useTailwind();
  const navigation = useNavigation<TProfileProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    
      <ScrollView   style={{backgroundColor:'#59C1CC'}} >
        <Image
          source={{ uri: "https://links.papareact.com/3jc" }}
          containerStyle={tw("w-full h-64")}
        />
        <Input placeholder={'search key'}
         value={input}
         onChangeText={setInput}
         containerStyle={tw('bg-white font-semibold pt-5 pb-0 px-10 ')}
        />
      </ScrollView>
 
  );
};

export default ProfileScreen;

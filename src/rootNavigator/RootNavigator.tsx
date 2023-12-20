import React, { Component} from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
/**
 * @author
 * @function @ Birdev
 **/

export type  TRootNavigatorProps={
  main:any,
  MyModal:{ userId:'string' ; name: 'string'};
  order:{order:any};
}
const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (

        <NavigationContainer>
          <RootStack.Navigator>
          <RootStack.Group>
            <RootStack.Screen name="Main"   component={TabNavigator} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
  
    
    
  );
};
export default RootNavigator;

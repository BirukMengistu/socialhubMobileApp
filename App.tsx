import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import React from 'react';
import Home from './src/screen/Home'


import RootNavigator from './src/rootNavigator/RootNavigator';
export default function App() {
  return (
    
    //@ts-ignore
    <TailwindProvider utilities={utilities}>
       <RootNavigator/>
  </TailwindProvider>
   
  );
}


import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screen/Home'
import ProfileScreen from '../screen/ProfileScreen'
import { useNavigation } from '@react-navigation/native'
import { Icon, color } from '@rneui/base'
interface IProps {}

/**
* @author
* @function @ TabNavigator
**/
export type  TTabNavigatorProps={
    main:any,
    MyModal:{ userId:'string' ; name: 'string'};
    profile:{profile:any};
  }
const TabStack = createBottomTabNavigator()
export const TabNavigator= () => { 

    const navigation = useNavigation()
    useLayoutEffect(()=>{
      navigation.setOptions(
        {
            headerShown:false
        }
      )  
    },[])
 return(
  
      <TabStack.Navigator screenOptions={({
     route
  })=>({
    tabBarActiveTintColor:'orange',
    tabBarInactiveTintColor:'gray',
    tabBarIcon:({focused,color, size})=>{
        if(route.name === 'Home'){
            return <Icon name='home'
             type='antDesign'
             color={focused?'#59C1CC':'gray'}/>
        }
        if(route.name === 'Profile'){
            return <Icon name='users'
             type='entypo'
             color={focused ? '#59C1CC' : 'gray'}/>
        }
    }
  })} >
     <TabStack.Screen  name='Home' component={Home}/>
     <TabStack.Screen  name='Profile' component={ProfileScreen}/>
  </TabStack.Navigator>
  

  )
}



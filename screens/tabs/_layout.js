import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../tabs/home";
import InspirationScreen from "../tabs/inspiration";
import SavedScreen from "../tabs/saved";
import SettingScreen from "../tabs/setting";

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
const noHead = { headerShown: false};

const Tabs = () => {
  return (
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Inspiration":
              iconName = "bulb-outline";
              break;
            case "Saved":
              iconName = "bookmark-outline";
              break;
            case "Setting":
              iconName = "settings-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "#89580A" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          backgroundColor: '#FEFFC1',
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "#89580A" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Inspiration" component={InspirationScreen} options={noHead}/>
        <Tab.Screen name="Saved" component={SavedScreen} options={noHead} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
  );
};
export default Tabs;
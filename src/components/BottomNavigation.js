import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as S from "../screen/index-page";
import * as H from "../screen/Home/index-home";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <SafeAreaProvider style={style.mainContainer}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={S.Home} />
        <Tab.Screen name="Skill" component={H.Skill} />
        <Tab.Screen name="Calendar" component={S.Calendar} />
        <Tab.Screen name="Support" component={S.Support} />
        <Tab.Screen name="Profile" component={S.Profile} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

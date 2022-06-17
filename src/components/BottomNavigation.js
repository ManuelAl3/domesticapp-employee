import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as S from "../screen/index-page";
import * as H from "../screen/Home/index-home";
import HomeIcon from "../assets/bottomTab/home.svg";
import ConfigIcon from "../assets/bottomTab/config.svg";
import CalendarIcon from "../assets/bottomTab/calendar.svg";
import ServiceIcon from "../assets/bottomTab/service.svg";
import MenuIcon from "../assets/bottomTab/menu.svg";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <SafeAreaProvider style={style.mainContainer}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { height: 74 },
          border: 0,
        }}
        tabBarShowLabel={false}
        barStyle={{ backgroundColor: "#FFFFFF" }}
      >
        <Tab.Screen
          name="Home"
          options={{
            title: "",
            tabBarIcon: () => (
              <Image source={HomeIcon} style={{ width: 30, height: 30 }} />
            ),
          }}
          component={S.Home}
        />
        <Tab.Screen
          name="Skill"
          options={{
            title: "",
            tabBarIcon: () => (
              <Image source={ConfigIcon} style={{ width: 30, height: 30 }} />
            ),
          }}
          component={H.Skill}
        />
        <Tab.Screen
          name="Calendar"
          options={{
            title: "",
            tabBarIcon: () => (
              <Image source={CalendarIcon} style={{ width: 30, height: 30 }} />
            ),
          }}
          component={S.Calendar}
        />
        <Tab.Screen
          name="Support"
          options={{
            title: "",
            tabBarIcon: () => (
              <Image source={ServiceIcon} style={{ width: 30, height: 30 }} />
            ),
          }}
          component={S.Support}
        />
        <Tab.Screen
          name="Profile"
          options={{
            title: "",
            tabBarIcon: () => (
              <Image source={MenuIcon} style={{ width: 30, height: 30 }} />
            ),
          }}
          component={S.Profile}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

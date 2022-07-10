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
import MyProfileStack from "../components/stacks/MyProfileStack";
import SupportStack from "../components/stacks/SupportStack";
import SkillStack from "../components/stacks/SkillStack";
import HomeStacks from "./stacks/HomeStacks";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <SafeAreaProvider style={style.mainContainer}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { height: 55 },
          border: 1,
        }}
        tabBarOptions={{
          showLabel: false
        }}
        barStyle={{ backgroundColor: "#FFFFFF" }}
      >
        <Tab.Screen
          name="Home"
          options={{
            
            tabBarIcon: () => (
              <HomeIcon height="30" width="30"/>
            ),
          }}
          component={HomeStacks}
        />
        <Tab.Screen
          name="Skill"
          options={{
            
            tabBarIcon: () => (
              <ConfigIcon height="30" width="30" />
            ),
          }}
          component={SkillStack}
        />
        <Tab.Screen
          name="Calendar"
          options={{
          
            tabBarIcon: () => (
              <CalendarIcon height="30" width="30" />
            ),
          }}
          component={S.Calendar}
        />
        {
          
          <Tab.Screen
          name="Support"
          options={{
           
            tabBarIcon: () => (
              <ServiceIcon height="30" width="30" />
            ),
          }}
          component={SupportStack}
        />
          
        }
        <Tab.Screen
          name="Profile"
          options={{
            
            tabBarIcon: () => (
              <MenuIcon height="30" width="30" />
            ),
          }}
          component={MyProfileStack}
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

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
import HomeStacks from "../components/stacks/HomeStacks";
//import SupportStack from "../components/stacks/SupportStack";
import SkillStack from "../components/stacks/SkillStack";

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
            title: "Inicio",
            tabBarIcon: () => (
              <HomeIcon style={{ width: 30, height: 30 }} />
            ),
          }}
          component={S.Home}
        />
        <Tab.Screen
          name="Skill"
          options={{
            title: "Habilidades",
            tabBarIcon: () => (
              <ConfigIcon style={{ width: 30, height: 30 }} />
            ),
          }}
          component={SkillStack}
        />
        <Tab.Screen
          name="Calendar"
          options={{
            title: "Calendario",
            tabBarIcon: () => (
              <CalendarIcon style={{ width: 30, height: 30 }} />
            ),
          }}
          component={S.Calendar}
        />
        {
          /*
          <Tab.Screen
          name="Support"
          options={{
            title: "Soporte",
            tabBarIcon: () => (
              <Image source={ServiceIcon} style={{ width: 30, height: 30 }} />
            ),
          }}
          component={SupportStack}
        />
          */
        }
        <Tab.Screen
          name="Profile"
          options={{
            title: "Menú",
            tabBarIcon: () => (
              <MenuIcon style={{ width: 30, height: 30 }} />
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

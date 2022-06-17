import { Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "./DashboardScreen";
import NavBar from "../navbar/NavBar";

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <DashboardScreen />
    </>
  );
}

import { Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardStack from "./DashboardStack";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  const ref = React.useRef(null);
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={ref}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={DashboardStack} />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Users"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

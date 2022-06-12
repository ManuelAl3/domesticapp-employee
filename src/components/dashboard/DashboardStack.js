import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "./DashboardScreen";

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator initialRouteName="Empty">
      <Stack.Screen
        name="Empty"
        options={{ headerShown: false }}
        component={DashboardScreen}
      />
    </Stack.Navigator>
  );
}

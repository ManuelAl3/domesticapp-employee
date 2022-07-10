import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as H from "../../screen/Home/index-home";

const Stack = createNativeStackNavigator();

export default function SkillStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SkillIndex"
    >
      <Stack.Screen name="SkillIndex" component={H.Skill} />
      <Stack.Screen name="GoodP" component={H.GoodP} />
    </Stack.Navigator>
  );
}

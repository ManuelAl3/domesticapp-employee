import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as H from "../../screen/Home/index-home";
import * as S from "../../screen/index-page";
import Notifications from "../../screen/Support/Notifications";

const HomeStack = createNativeStackNavigator();

export default function HomeStacks() {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <HomeStack.Screen name="Home" component={S.Home} />
      {/* <HomeStack.Screen name="Review" component={H.Review} /> */}
      <HomeStack.Screen name="Certification" component={H.Certification} />
      {/* <HomeStack.Screen name="Contract" component={H.Contract} />
      <HomeStack.Screen name="LegalInfo" component={H.LegalInfo} />
      <HomeStack.Screen name="GoodP" component={H.GoodP} /> */}
      {/*       <HomeStack.Screen name="Skill" component={H.Skill} />
       */}{" "}
      {/* <HomeStack.Screen name="Review" component={Profile} /> */}
    </HomeStack.Navigator>
  );
}

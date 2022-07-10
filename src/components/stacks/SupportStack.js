import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Supp from "../../screen/Support/index-support";
import * as S from "../../screen/index-page";
import FaqsScreen from "../../screen/Support/FAQs/Faq";

const Stack = createNativeStackNavigator();

export default function SupportStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
    initialRouteName="SupportIndex"
  >
      <Stack.Screen name="SupportIndex" component={S.Support} />
      <Stack.Screen name="Help" component={Supp.Help} />
      <Stack.Screen name="ServiceD" component={Supp.ServiceD} />
      <Stack.Screen name="Faqs" component={Supp.Faqs} />
      <Stack.Screen name="Faq" component={FaqsScreen} />
      <Stack.Screen name="Notification" component={Supp.Notification} />
      <Stack.Screen name="Insurance" component={Supp.InsurancePolicy} />
      <Stack.Screen name="JobSecurity" component={Supp.JobSecurity} />
    </Stack.Navigator>
  );
}

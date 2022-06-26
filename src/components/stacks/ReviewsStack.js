import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Review from "../../screen/Home/Reviews";
import ReportReview from "../../screen/Home/ReportReview";

const Stack = createNativeStackNavigator();

export default function ReviewsStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Review"
    >
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Report" component={ReportReview} />
    </Stack.Navigator>
  );
}

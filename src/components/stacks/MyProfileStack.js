import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfile from "../../screen/Profile/My-profile";
import Reviews from "../../screen/Home/Reviews";
import ReportReview from "../../screen/Home/ReportReview";
import Contract from "../../screen/Home/Contract";
import Certifications from "../../screen/Home/Certifications";
import Notifications from "../../screen/Support/Notifications";
import LegalInformation from "../../screen/Home/Legal-information";
import Profile from "../../screen/Profile";
import PrivacyPolicy from "../../screen/Home/legalInformation/PrivacyPolicy";
import TermsConditions from "../../screen/Home/legalInformation/TermsConditions";
import DataTreatment from "../../screen/Home/legalInformation/DataTreatment";

const Stack = createNativeStackNavigator();

export default function MyProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Review" component={Reviews} />
      <Stack.Screen name="Report" component={ReportReview} />
      <Stack.Screen name="Contract" component={Contract} />
      <Stack.Screen name="Certification" component={Certifications} />
      <Stack.Screen name="Notification" component={Notifications} />
      <Stack.Screen name="LegalInfo" component={LegalInformation} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="DataTreatment" component={DataTreatment} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
}

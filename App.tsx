import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as S from "./src/screen/index-page";
import * as H from "./src/screen/Home/index-home";
import * as Supp from "./src/screen/Support/index-support";
import FaqScreen from "./src/screen/Support/FAQs/Faq";
import BottomNavigation from "./src/components/BottomNavigation";
import MyEarnings from "./src/components/earnings/MyEarnings";
import Profile from "./src/screen/Profile";
import { AuthProvider } from "./src/context/auth-context";
import { Provider } from 'use-http';
import { BASE_URI } from "./config";
import { retrieveToken } from "./src/controllers/tokens";
import { useAuth } from "./src/services/use-auth";
import { LocaleConfig } from 'react-native-calendars';


/* export default function App() {
  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}); */

const Stack: any = createNativeStackNavigator();

function App() {

  const [state, functions] = useAuth();

  return (
    <Provider 
      url={BASE_URI} 
      options={{
        interceptors: {
          request: async (data) => {
            const token = await retrieveToken();

            if (token) {
              (data.options.headers as any)['Authorization'] = `Token token=${await retrieveToken()}`;
            }

            return data.options;
          }
        }
      }}
    >
    <AuthProvider value={functions}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      { state.user ? (
              state.user.new ? (
            <>
              <Stack.Screen name="Introduction" component={S.Introduction} />
              <Stack.Screen name="Home" component={S.Home} />
              <Stack.Screen name="Profile" component={S.Profile} />
              <Stack.Screen name="Support" component={S.Support} />
              <Stack.Screen name="Calendar" component={S.Calendar} />
            </>
          ) : (
            <>
              <Stack.Screen name="Main" component={BottomNavigation} />
              <Stack.Screen name="Home" component={S.Home} />
              <Stack.Screen name="Capacitation" component={H.Capacitation} />
              <Stack.Screen name="Certification" component={H.Certification} />
              <Stack.Screen name="Contract" component={H.Contract} />
              <Stack.Screen name="GoodP" component={H.GoodP} />
              <Stack.Screen name="LegalInfo" component={H.LegalInfo} />
              <Stack.Screen name="Profit" component={H.Profit} />
              <Stack.Screen name="Review" component={H.Review} />
              <Stack.Screen name="Skill" component={H.Skill} />
              <Stack.Screen name="Profile" component={S.Profile} />
              <Stack.Screen name="MyProfile" component={S.MyProfile} />
              <Stack.Screen name="Support" component={S.Support} />
              <Stack.Screen name="ServiceD" component={Supp.ServiceD} />
              <Stack.Screen name="Notification" component={Supp.Notification} />
              <Stack.Screen name="Faqs" component={Supp.Faqs} />
              <Stack.Screen name="Faq" component={FaqScreen} />
              <Stack.Screen name="Calendar" component={S.Calendar} />
              <Stack.Screen name="Report" component={H.Report} />
              <Stack.Screen name="TermsConditions" component={H.TC} />
              <Stack.Screen name="DataTreatment" component={H.DT} />
              <Stack.Screen name="PrivacyPolicy" component={H.PP} />
              <Stack.Screen name="Help" component={Supp.Help} />
              <Stack.Screen name="ReportCalendar" component={S.ReportCalendar} />
              <Stack.Screen
                name="InsurancePolicy"
                component={Supp.InsurancePolicy}
              />
              <Stack.Screen name="JobSecurity" component={Supp.JobSecurity} />
            </>
          )
       
      ) : (
        <>
          <Stack.Screen name="Login" component={S.Login} />
        </>
      )}
    </Stack.Navigator>
    </AuthProvider>
    </Provider>
  );
}

export default function ApplicationWrapper() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}


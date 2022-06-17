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
import { AuthProvider, useAuth } from "./src/context/auth-context";
import MyEarnings from "./src/components/earnings/MyEarnings";
import Dashboard from "./src/components/dashboard/Dashboard";
import DashboardScreen from "./src/components/dashboard/DashboardScreen";
import Profile from "./src/screen/Profile";
import Verification from "./src/components/verify/Verification";
import Introduction from "./src/components/introduction/Introduction";

/* export default function App() {
  return <Introduction />;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
}); */

const Stack = createNativeStackNavigator();

function App() {
  const [isAuth, setAuth] = React.useState(true);
  const [isNew, setNew] = React.useState(false);
  const { user } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          {isNew ? (
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
            </>
          )}
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={S.Login} />
        </>
      )}
    </Stack.Navigator>
  );
}

function Index() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <App />
      </AuthProvider>
    </NavigationContainer>
  );
}
export default Index;

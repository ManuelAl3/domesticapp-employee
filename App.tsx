import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as S from "./src/screen/index-page";

import BottomNavigation from "./src/components/BottomNavigation";
import { AuthProvider, useAuth } from "./src/context/auth-context";
import NewHomeScreen from "./src/screen/NewHome";


const Stack: any = createNativeStackNavigator();

function App() {

  const {user} = useAuth();

  return (
  
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
            <>           
              <Stack.Screen name="Index" component={NewHomeScreen} />
              <Stack.Screen name="Main" component={BottomNavigation} />
              

            </>
      ) : (
        <>
          <Stack.Screen name="Login" component={S.Login} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function ApplicationWrapper() {
  return (
    
    <NavigationContainer>
      <AuthProvider>
        <App />
      </AuthProvider>
    </NavigationContainer>
    
  );
}


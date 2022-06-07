import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import IntroduccionI from "./components/introduccion/IntroduccionI";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as S from "./screen/index-page";
import * as H from "./screen/Home/index-home";
import * as Supp from "./screen/Support/index-support";

/*export default function App() {
  return <IntroduccionI />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
*/


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [isAuth, setAuth] = React.useState(true);
  const [isNew, setNew] = React.useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          isAuth ? (
            <>
              {
                isNew ? (
                  <>
                    <Stack.Screen name="Introduction" component={S.Introduction} />
                    <Stack.Screen name="Home" component={S.Home} />
                    <Stack.Screen name="Profile" component={S.Profile} />
                    <Stack.Screen name="Support" component={S.Support} />
                    <Stack.Screen name="Calendar" component={S.Calendar} />
                  </>
                ) : (
                  <>
                    <Stack.Screen name="Home" component={Supp.Faqs} />
                      <Stack.Screen name="Capacitation" component={H.Capacitation} />
                      <Stack.Screen name="Certification" component={H.Certification} />
                      <Stack.Screen name="Contract" component={H.Contract} />
                      <Stack.Screen name="GoodP" component={H.GoodP} />
                      <Stack.Screen name="LegalInfo" component={H.LegalInfo} />
                      <Stack.Screen name="Profit" component={H.Profit} />
                      <Stack.Screen name="Review" component={H.Review} />
                      <Stack.Screen name="Skill" component={H.Skill} />
                    <Stack.Screen name="Profile" component={S.Profile} />
                    <Stack.Screen name="Support" component={S.Support} />
                      <Stack.Screen name="ServiceD" component={Supp.ServiceD} />
                      <Stack.Screen name="Notification" component={Supp.Notification} />
                      <Stack.Screen name="Faqs" component={Supp.Faqs} />
                    <Stack.Screen name="Calendar" component={S.Calendar} />
                  </>
              )
              }
            </>
            ) : (
            <>
              <Stack.Screen name="Login" component={S.Login} />
            </>
          )
        }
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
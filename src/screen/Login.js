import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import { login } from "../services/session-service";

function LoginScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button onPress={()=>login({email: "customer@mail.com", password: "123456"})}>Login</Button>
    </View>
  );
}

export default LoginScreen;
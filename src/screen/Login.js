import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import { useAuth } from "../context/auth-context";

function LoginScreen({ navigation }) {
  const { login } = useAuth();

  function handleSubmit() {
    login({email: "employee@mail.com", password: "123456"}).catch((error) => {
      setErrors(error);
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button 
      title="Login"
      onPress={()=>handleSubmit()}/>
    </View>
  );
}

export default LoginScreen;
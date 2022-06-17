import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
} from "react-native";
import * as React from "react";
import { useAuth } from "../context/auth-context";
import { Input, Icon } from "@rneui/themed";
import loginHome from "../assets/login/loginHome.png";

function LoginScreen({ navigation }) {
  const { login } = useAuth();

  function handleSubmit() {
    login({ email: "employee@mail.com", password: "123456" }).catch((error) => {
      // setErrors(error);
      console.log("err");
    });
  }

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <ScrollView>
        <View></View>
        <View>
          <Image source={loginHome} />
        </View>
        <View>
          <Text>Login Screen</Text>
          <View>
            <Text>Email addres</Text>
            <Input placeholder="Email" />
          </View>
          <View>
            <Text>Password</Text>
            <Input placeholder="password" />
          </View>

          <View>
            <View></View>
            <Text>O</Text>
            <View></View>
          </View>
          <Button title="Iniciar Sesión" onPress={() => handleSubmit()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;

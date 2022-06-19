import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { useAuth } from "../context/auth-context";
import { Input, Icon } from "@rneui/themed";
import loginHome from "../assets/login/loginHome.png";
import colors from "../assets/colors/colors";

function LoginScreen({ navigation }) {
  const { login } = useAuth();

  const btnStyle = {
    height: 55,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EC607E",
    borderRadius: 10,
    marginBottom: 16,
  };

  function handleSubmit() {
    login({ email: "employee@mail.com", password: "123456" }).catch((error) => {
      // setErrors(error);
      console.log(error);
    });
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue,
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginBottom: 60,
        }}
      >
        <Image source={loginHome} style={{ width: 280, height: 276 }} />
      </View>
      <View
        style={{
          width: "75%",
          backgroundColor: colors.blue,
        }}
      >
        <View>
          <View>
            <Text style={styles.text}>Email addres</Text>
            <Input placeholder="Email" />
          </View>
          <View>
            <Text style={styles.text}>Password</Text>
            <Input placeholder="password" />
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity style={btnStyle} onPress={() => handleSubmit()}>
              <Text style={styles.textButton}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textFooter}>
            Domesticapp Ver.1.01 2022 Derechos Reservados
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 36,
    color: "#ffff",
  },
  containerButton: {
    alignItems: "center",
    marginTop: 40,
  },
  text: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 17,
    color: "#ffff",
  },
  textFooter: {
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 16,
    textAlign: "center",
    marginBottom: 17,
    color: "#FBFBFB",
  },
});

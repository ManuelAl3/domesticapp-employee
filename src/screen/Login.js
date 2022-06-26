import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { Input, Icon } from "@rneui/themed";
import loginHome from "../assets/login/loginHome.png";
import colors from "../assets/colors/colors";
import { Picker } from "@react-native-picker/picker";

function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const [country, setCountry] = useState("col");

  const changeCountry = async (country) => {
    setCountry(country);
    // await AsyncStorage.setItem('country', country);
  };

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
      <View style={styles.countrySelect}>
        <Picker
          selectedValue={country}
          onValueChange={changeCountry}
          dropdownIconColor="#000"
        >
          <Picker.Item
            fontFamily="Poppins_400Regular"
            style={styles.countrySelectText}
            label="Colombia"
            value="col"
          />
          <Picker.Item
            fontFamily="Poppins_400Regular"
            style={styles.countrySelectText}
            label="España"
            value="es"
          />
          <Picker.Item
            fontFamily="Poppins_400Regular"
            style={styles.countrySelectText}
            label="Canadá"
            value="ca"
          />
        </Picker>
      </View>
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
  countrySelect: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: "60%",
    borderRadius: 5,
  },
  countrySelectText: {
    fontSize: 17,
    color: "#000",
    textAlign: "center",
  },
});

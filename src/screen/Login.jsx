import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Input } from "@rneui/themed";
import loginHome from "../assets/login/loginHome.png";
import colors from "../assets/colors/colors";
import { Picker } from "@react-native-picker/picker";
import { COLORS } from "../../config";
import { useAuth } from "../context/auth-context";

function LoginScreen() {
  const [country, setCountry] = useState("col");
  const { login } = useAuth();
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
  
    login({email: "data@mail.com", password: "123456"}).catch((error) => {
        console.log(error.message);
    })
  }

  return (

    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.blue,
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
            <TouchableOpacity style={btnStyle} onPress={handleSubmit}>
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
  mainContainer: {
      flex: 1,
      backgroundColor: COLORS.lightGray,
  },
  footerColor: {
      color: '#222'
  },
  tabScreenContainer: {
      alignItems: 'center',
  },
  centerContainer: {
      flex: 1,
      width: '85%',
      paddingVertical: 15,
      alignItems: 'center',
  },
  buttonContainer: {
      width: '100%',
      alignItems: 'center',
      position: "absolute",
      bottom: 10,
  },
  btnAction: {
      marginBottom: 15,
      padding: 10,
      backgroundColor: COLORS.primary
  },
  btnTextAction: {
      fontSize: 18,
      fontFamily: 'Montserrat_600SemiBold',
  },
  inputsContainer: {
      width: '100%',
      justifyContent: 'flex-start'
  },
  header: {
      backgroundColor: '#fff',
      borderBottomStartRadius: 30,
      borderBottomEndRadius: 30,
      alignItems: 'center',
      marginBottom: 5,
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
  },
  tabs: {
      flexDirection: 'row',
      width: '85%',
      justifyContent: 'space-between',
  },
  tab: {
      width: '50%'
  },
  tabText: {
      textAlign: 'center',
      fontSize: 18,
      marginBottom: 10,
  },
  tabIndicator: {
      backgroundColor: COLORS.secondary,
      height: 3,
      width: '100%'
  },
  extraSpace: {
      height: 100
  },
  inputBlueRounded: {
      borderWidth: 2,
      borderBottomWidth: 2,
      borderColor: '#0BBBEF',
      backgroundColor: '#FFFFFF',
      borderRadius: 13,
      height: 45,
      paddingHorizontal: 15,
      fontFamily: 'Poppins_500Medium',
      marginBottom: 5,
  },
  labelForInput: {
      fontSize: 17,
      fontFamily: 'Poppins_500Medium',
      color: '#787B82',
  },
  pressableImage: {
      marginBottom: 20,
      height: 144,
      width: 144,
      alignSelf: "center",
  },
  imagePlaceholder: {
      height: 144,
      width: 144,
      backgroundColor: '#D9D9D9',
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 72
  },
  iconCamera: {
      fontSize: 42,
      color: '#838383'
  },
  iconErase: {
      fontSize: 20,
      color: '#FFF'
  },
  textAddImage: {
      color: '#838383',
      fontFamily: 'Poppins_500Medium',
      fontSize: 12
  },
  imagePhoto: {
      height: 144,
      width: 144,
      borderRadius: 72
  },
  buttonErase: {
      position: "absolute",
      bottom: 0,
      right: 0,
      backgroundColor: '#F00',
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      height: 25,
      width: 25,
  },
  picker: {
      borderWidth: 2,
      borderBottomWidth: 2,
      borderColor: '#0BBBEF',
      backgroundColor: '#FFFFFF',
      borderRadius: 13,
      height: 45,
      justifyContent: 'center',
  },
  pickerLabel: {
      opacity: 0.4,
      marginBottom: 5
  },
  textPicker: {
      fontFamily: 'Poppins_500Medium',
  }
});
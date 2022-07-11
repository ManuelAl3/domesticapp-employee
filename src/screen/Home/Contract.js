import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import BackTitledHeader from "../../components/BackTitleHeader";
import colors from "../../assets/colors/colors";
import * as Linking from 'expo-linking';
import { useAuth } from "../../context/auth-context";
import CONTRATO from "../../assets/Png/CONTRATO.png"
import { vw, vh } from "react-native-expo-viewport-units";

function ContractScreen() {
  const{user}= useAuth();
  const btnStyle = {
    height: 55,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
    marginBottom: 16,
  };
  function MyContract(){
    const uri = user.contrato_url
    Linking.openURL(uri);
  }

  return (
    <>
      <BackTitledHeader title="Mi Contrato" />
      <View style={{ flex: 1, alignItems: "center" }}>
        <View>
          <View
            style={{
              marginLeft: 25,
              marginVertical: 20,
            }}
          >
            <Text style={styles.text}>
              En este apartado puedes encontrar tu contrato para que puedas
              visualizarlo haciendo la descarga del mismo en formato pdf
            </Text>
          </View>

        </View>
        <View style={{alignItems: 'center',  }}>
            <Image style={{width: vw(90), height: vh(45),}} source={CONTRATO}/>
            </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={btnStyle} onPress={MyContract}>
            <Text style={styles.textButton}>Descargar contrato</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default ContractScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 19,
    color: "#35435E",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 26,
    color: "#3D4451",
    marginBottom: 20,
    marginTop: 20,
  },
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
  containerButton: {
    alignItems: "center",
    marginTop: 30,
  },
});

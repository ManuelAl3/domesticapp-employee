import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../../assets/colors/colors";
import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
import * as Linking from 'expo-linking';
import LEGAL from "../../assets/Png/LEGAL.png"
import { vw, vh } from "react-native-expo-viewport-units";

function LegalInforationScreen({ navigation }) {
  const btnStyle = {
    height: 55,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
    marginBottom: 16,
  };
  function TermsConditions(){
    Linking.openURL(`https://domesticapp-storage.s3.us-east-2.amazonaws.com/pdf/T%C3%89RMINOS+Y+CONDICIONES+DOMESTICAPP+2022.pdf`);
  }

  function PyP(){
    Linking.openURL(`https://domesticapp-storage.s3.us-east-2.amazonaws.com/pdf/POLITICA+DE+PRIVACIDAD+DOMESTICAPP+2022.pdf`);
  }

  function AyT(){
    Linking.openURL(`https://domesticapp-storage.s3.us-east-2.amazonaws.com/pdf/AUTORIZACI%C3%93N+Y+TRATAMIENTO+DE+DATOS+DOMESTICAPP+2022.pdf`);
  }

  return (
    <>
      <BackTitledHeader title="Información legal" />

      <View style={{alignItems: 'center', marginTop: 30, }}>
            <Image style={{width: vw(90), height: vh(45),}} source={LEGAL}/>
            </View>
      <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
        <TouchableOpacity
          style={btnStyle}
          onPress={TermsConditions}
        >
          <Text style={styles.textButton}>Términos y condiciones</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={btnStyle}
          onPress={PyP}
        >
          <Text style={styles.textButton}>Política de Privacidad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={btnStyle}
          onPress={AyT}
        >
          <Text style={styles.textButton}>Autorización y Tratamiento</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default LegalInforationScreen;

const styles = StyleSheet.create({
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
});

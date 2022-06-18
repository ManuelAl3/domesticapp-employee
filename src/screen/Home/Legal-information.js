import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";
import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";

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
  return (
    <>
      <BackTitledHeader title="Información legal" />
      <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
        <TouchableOpacity style={btnStyle}>
          <Text style={styles.textButton}>Termios y Condiciones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle}>
          <Text style={styles.textButton}>Politica de Privacidad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle}>
          <Text style={styles.textButton}>Autorización y Tratamiento</Text>
        </TouchableOpacity>

        <Text>Domesticapp Ver.1.01 2022 Derechos Reservados</Text>
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

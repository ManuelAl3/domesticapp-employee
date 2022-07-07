import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BackTitledHeader from "../../components/BackTitleHeader";
import colors from "../../assets/colors/colors";

function ContractScreen() {
  const btnStyle = {
    height: 55,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
    marginBottom: 16,
  };

  return (
    <>
      <BackTitledHeader title="Mi Contrato" />
      <View style={{ flex: 1, alignItems: "center" }}>
        <View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <View
              style={{
                marginLeft: 25,
              }}
            >
              <Text style={styles.title}>Contrato</Text>
            </View>
            <Text style={styles.text}>
              En este apartado puedes encontrar tu contrato para que puedas
              visualizarlo haciendo la descarga del mismo en formato pdf
            </Text>
          </View>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={btnStyle}>
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

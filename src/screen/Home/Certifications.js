import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
import { useAuth } from "../../context/auth-context";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";

const btnStyle = {
  height: 55,
  width: "80%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.blue,
  borderRadius: 10,
  marginBottom: 16,
};

function CertificationScreen({ navigation }) {
  const { user } = useAuth();
  return (
    <>
      <BackTitledHeader title="Mi Certificado Laboral" />
      <View>
        <View
          style={{
            marginLeft: 25,
          }}
        >
          <Text style={styles.title}>Datos de certificado</Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.title}>
            Nombre: <Text style={{ fontWeight: "400" }}>{user.full_name} </Text>
          </Text>
          <Text style={styles.title}>
            Inicio de contrato: <Text style={{ fontWeight: "400" }}></Text>{" "}
          </Text>
          <Text style={styles.title}>
            Puesto: <Text style={{ fontWeight: "400" }}></Text>
          </Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={btnStyle}>
            <Text style={styles.textButton}>Descargar mi certificado</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default CertificationScreen;

const styles = StyleSheet.create({
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 26,
    color: "#3D4451",
    marginBottom: 20,
    marginTop: 20,
  },
  containerButton: {
    alignItems: "center",
    marginTop: 30,
  },
});

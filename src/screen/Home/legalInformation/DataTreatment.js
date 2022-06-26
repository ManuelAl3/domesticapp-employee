import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BackTitledHeader from "../../../components/BackTitleHeader";
import colors from "../../../assets/colors/colors";

function DataTreatment({ navigation }) {
  const btnStyle = {
    height: 55,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
  };
  return (
    <>
      <BackTitledHeader title="Autorización y  Trat..." />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <View style={{ width: "80%" }}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 14,
                lineHeight: 26,
                color: "#000000",
              }}
            >
              GARANTÍA Y PROTECCIÓN DE DATOS{" "}
            </Text>
            <Text
              style={{
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: 14,
                lineHeight: 22,
                color: "#000000",
              }}
            >
              En el tratamiento de los datos de carácter personal, DOMESTICAPP
              se compromete a garantizar y proteger las libertades públicas y
              los derechos fundamentales de las personas físicas de los ficheros
              y, especialmente, su honor y su intimidad familiar y personal,
              obligándose en este sentido, a efectuar el correspondiente
              tratamiento de datos de acuerdo con la normativa vigente en cada
              momento y a guardar el más absoluto secreto en relación con la
              información entregada por los clientes y usuarios.
            </Text>
            <Text
              style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 14,
                lineHeight: 26,
                color: "#000000",
              }}
            >
              CALIDAD DE LOS DATOS{" "}
            </Text>
            <Text
              style={{
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: 14,
                lineHeight: 22,
                color: "#000000",
              }}
            >
              Los usuarios y clientes deberán velar por el cumplimiento de todas
              las medidas técnicas y organizativas necesarias con la finalidad
              de garantizar la seguridad de los datos de carácter personal,
              evitando su alteración, pérdida, tratamiento o acceso no
              autorizado. Los datos que se comuniquen a través de la aplicación
              tendrán que ser exactos y puestos al día siendo de exclusiva
              responsabilidad de los clientes y usuarios la actualización de
              estos datos.
            </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 30 }}>
            <TouchableOpacity style={btnStyle}>
              <Text style={styles.textButton}>Descargar documento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default DataTreatment;

const styles = StyleSheet.create({
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
});

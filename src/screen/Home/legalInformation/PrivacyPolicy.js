import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BackTitledHeader from "../../../components/BackTitleHeader";
import colors from "../../../assets/colors/colors";

function PrivacyPolicy({ navigation }) {
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
      <BackTitledHeader title="Política de Privacidad" />
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
              DOMESTICAPP desea poner en conocimiento de los usuarios y clientes
              de la/s aplicación/es y servicios, la política llevada a cabo
              respecto al tratamiento de todos los datos de carácter personal
              que por la utilización de las funciones de la/s aplicación/es se
              faciliten a la empresa.{" "}
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
              IDENTIFICACIÓN DEL RESPONSABLE DEL FICHERO{" "}
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
              DOMESTICAPP S.A.S. (en adelante DOMESTICAPP) con domicilio social
              en Medellín Colombia, dirección Calle 9 sur #79C-151 e inscrito en
              la Cámara de Comercio de Medellín., informa a los usuarios y
              clientes de la aplicación de la existencia de un fichero
              automatizado de datos personales cuyo responsable es DOMESTICAPP.
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
              FINALIDAD DEL FICHERO{" "}
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
              Todos los datos que se solicitan a los usuarios y clientes a
              través de la aplicación para dispositivos móviles y el portal web
              serán necesarios para prestar el servicio objeto del servicio en
              virtud del cual se ha procedido a la descarga e instalación de
              la/s aplicación/es en los correspondientes dispositivos.
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

export default PrivacyPolicy;

const styles = StyleSheet.create({
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
});

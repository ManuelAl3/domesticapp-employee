import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";

function CertificationScreen({ navigation }) {
  return (
    <>
    <BackTitledHeader title="Mi Certificado Laboral" />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Datos de certificado</Text>
      <Text>Nombre: </Text>
      <Text>Inicio de contrato: </Text>
      <Text>Puesto: </Text>
    </View>
    </>
  );
}

export default CertificationScreen;
import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
import { useAuth } from "../../context/auth-context";

function CertificationScreen({ navigation }) {
  const {user}= useAuth();
  return (
    <>
    <BackTitledHeader title="Mi Certificado Laboral" />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Datos de certificado</Text>
      <Text>Nombre: {user.full_name}</Text>
      <Text>Inicio de contrato: </Text>
      <Text>Puesto: </Text>
    </View>
    </>
  );
}

export default CertificationScreen;
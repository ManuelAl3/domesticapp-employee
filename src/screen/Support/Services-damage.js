import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";

function ServiceDamageScreen({ navigation }) {
  return (
    <>
      <BackTitleHeader title="Daños y Accidentes" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Daño en el Servicio o Accidentes Laborales</Text>
      </View>
    </>
  );
}

export default ServiceDamageScreen;

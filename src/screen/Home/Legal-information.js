import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";

function LegalInforationScreen({ navigation }) {
  return (
    <>
    <BackTitledHeader title="Mis ganancias" />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Termios y Condiciones"
      />
      <Button
        title="Politica de Privacidad"
      />
      <Button
        title="Autorización y Tratamiento"
      />

    <Text>Domesticapp Ver.1.01 2022 Derechos Reservados</Text>
    </View>
    </>
  );
}

export default LegalInforationScreen;
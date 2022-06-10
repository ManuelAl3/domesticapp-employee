import { StyleSheet, Text, View, Image } from "react-native";
import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
import { useAuth } from "../../context/auth-context";

function ProfitsScreen({ navigation }) {
  const { user } = useAuth();
  return (
    <>
    <BackTitledHeader title="Mis ganancias" />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{user.full_name}</Text>
      <Text>{user.position}</Text>
      <Text>{user.country}</Text>
      <Text>{user.document_id}</Text>
      <Text>Este es un estimado de tus ganancis brutas (luego del pago de aportaciones sociales y de ley).
       Recuerda que estas pueden variar según diversas eventualidades
      </Text>
      <Image 
      style={styles.tinyLogo}
      source={user.image_url}
      />

      <Text>Registro</Text>
      <Text>PERIODO:</Text>
      <Text>JORDNADAS COMPLETAS:</Text>
      <Text>MEDIAS JORNADAS:</Text>
      <Text>GANANCIA BRUTA JORNADA COMPLETA:</Text>
      <Text>GANANCIA BRUTA MEDIA JORNADA:</Text>
      <Text>FECHAS DE CORTE: (5) y (20) de cada mes</Text>
      <Text>AUXILIO TRANSPORTE POR JORNADA:</Text>
    </View>
    </>
  );
}

export default ProfitsScreen;
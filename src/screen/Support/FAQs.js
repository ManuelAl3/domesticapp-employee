import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import { Preguntas } from "../../constants/preguntasF";
import BackTitledHeader from "../../components/BackTitleHeader";

function FaqsScreen({ navigation }) {
  return (
    <>
    <BackTitledHeader title="Preguntas Frecuentes" />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Text>Aquí encontraras una serie de preguntas frecuentes,
       esperamos te sean de ayuda, o comunícate con el Servicio de Soporte y Ayuda</Text>
      <Text>Tengo dudas con:</Text>
      {
        Preguntas.map((pregunta)=>(
          <View key={pregunta.id}>
            <Text onPress={() => navigation.navigate(`${pregunta.ruta}`,{ itemId: pregunta.id})}>{pregunta.nombre}</Text>
          </View>
        ))
      }
    </View>
    </>
  );
}

export default FaqsScreen;
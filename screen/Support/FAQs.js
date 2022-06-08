import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import { Preguntas } from "../../constants/preguntasF";

function FaqsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tengo dudas con:</Text>
      {
        Preguntas.map((pregunta)=>(
          <>
          <Text onPress={() => navigation.navigate(`${pregunta.ruta}`,{ itemId: pregunta.id})}>{pregunta.nombre}</Text>
          </>
        ))
      }
    </View>
  );
}

export default FaqsScreen;
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import * as React from "react";
import { supportOptions } from "../constants/supportO";

function SupportScreen({ navigation }) {
  return (
    <ScrollView>
      {
        supportOptions.map((option)=>(
          <View key={option.id}>
          <Image 
            style={{width: 100, height: 100}}
            source={option.img}
          />
          <Text onPress={() => navigation.navigate(`${option.ruta}`,{ itemId: option.id})}>{option.nombre}</Text>
          </View>
        ))
      }
    </ScrollView>
  );
}

export default SupportScreen;
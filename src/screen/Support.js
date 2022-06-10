import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import * as React from "react";
import { supportOptions } from "../constants/supportO";
import BackTitledHeader from "../components/BackTitleHeader";

function SupportScreen({ navigation }) {
  return (
    <>
    <BackTitledHeader title="Centro de Ayuda" />
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
    </ScrollView></>
  );
}

export default SupportScreen;
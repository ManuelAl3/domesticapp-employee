import { StyleSheet, Text, View, Button, Image, ScrollView } from "react-native";
import * as React from "react";
import { Dashboard } from "../constants/homeDash";

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      {
        Dashboard.map((option)=>(
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

export default HomeScreen;
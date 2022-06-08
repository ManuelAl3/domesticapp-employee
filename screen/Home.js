import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as React from "react";
import { Dashboard } from "../constants/homeDash";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {
        Dashboard.map((option)=>(
          <View>
          <Image 
            style={{width: 100, height: 100}}
            source={{
              uri: option.img,
            }}
          />
          <Text onPress={() => navigation.navigate(`${option.ruta}`,{ itemId: option.id})}>{option.nombre}</Text>
          </View>
        ))
      }
    </View>
  );
}

export default HomeScreen;
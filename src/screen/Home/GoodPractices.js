import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
import colors from "../../assets/colors/colors";
import * as Linking from 'expo-linking';
import BP from "../../assets/Png/BUENAS.png"
import { vw, vh } from "react-native-expo-viewport-units";

function GoodPracticesScreen({ navigation }) {
  const btnStyle = {
    height: 55,
    width: "80%",
    paddingHorzontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
    marginBottom: 10,
  };

  function PDF(){
    Linking.openURL(`https://domesticapp-storage.s3.us-east-2.amazonaws.com/pdf/Manual+de+Integraci%C3%B3n+y+Buenas+Practicas+Domesticapp+2022.pdf`);
  }
  return (
    <>
      <BackTitledHeader title="Buenas Prácticas" />
      
      <View>
        <View>
          <View
            style={{
              marginLeft: 25,
              marginVertical: 20,
            }}
          >
            <Text style={styles.text}>
              Con Buenas Prácticas, no sólo mejoraran tus reseñas, también tu
              carrera será beneficiada.
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 25,
            }}
          >
            <Text style={styles.title}>Buenas Prácticas</Text>
            <View style={{alignItems: 'center', marginTop: 50, }}>
            <Image style={{width: vw(90), height: vh(45),}} source={BP}/>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={PDF} style={btnStyle}>
          <Text style={styles.textButton}>Descarga manual</Text>
        </TouchableOpacity>
      </View>
      </>
   
  );
}

export default GoodPracticesScreen;
const styles = StyleSheet.create({
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
  },
  text: {
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 19,
    color: "#35435E",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 26,
    color: "#3D4451",

  },
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
});

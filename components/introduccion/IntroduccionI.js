import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Image } from "@rneui/themed";
import AppIntroSlider from "react-native-app-intro-slider";
import colors from "../../assets/colors/colors";
import font from "../../assets/fonts/fonts";

export default function IntroduccionI() {
  const data = [
    {
      title: "Bienvenido a Domesticapp",
      text: "Creamos un paso a paso para ayudarte a entender qué hacer para recibir tu primer empleo y hacer un mejor uso de la aplicación.",
      image: require("../../assets/introduccion/prueba1.png"),
    },
    {
      title: "Administra tus Horarios",
      text: "Reserva tus horarios, de esta manera estarás organizad Nosotros te avisaremos cuando esten listos los horarios que has reservado.",
      image: require("../../assets/introduccion/prueba2.png"),
    },
    {
      title: "Conoce tus Ganancias",
      text: "Tus ganancias desde la aplicación. Siempre sabrás cuando se ha realizado un pago por ofrecer tus servicios.",
      image: require("../../assets/introduccion/prueba3.png"),
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}> {item.title} </Text>
        <Image source={item.image} containerStyle={styles.img} />
        <Text style={styles.text}> {item.text} </Text>
      </View>
    );
  };
  const keyExtractor = (item) => {
    item.title;
  };
  return (
    <View style={styles.containerSlider}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        dotStyle={styles.doStyle}
        activeDotStyle={styles.activeDotStyle}
      />
      <Text style={styles.textFooter}>
        Domesticapp Ver.1.01 2022 Derechos Reservados
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerSlider: {
    flex: 1,
    backgroundColor: colors.backgroundMain,
  },
  container: {
    marginTop: 100,
    textAlign: "center",
    flex: 1,
    backgroundColor: colors.backgroundMain,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: font.fontMain,
    lineHeight: 22,
    letterSpacing: "0.5%",
  },
  text: {
    width: 336,
    height: 146,
    textAlign: "center",
    fontFamily: font.fontMain,
    lineHeight: 22,
    letterSpacing: "0.5%",
    fontSize: 20,
  },
  textFooter: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: font.fontFooter,
    fontWeight: 600,
    lineHeight: 16,
    marginBottom: 13,
    color: colors.grayFaded,
  },
  img: {
    aspectRatio: 1,
    width: "70%",
    flex: 1,
  },
  doStyle: {
    backgroundColor: colors.grayFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
});

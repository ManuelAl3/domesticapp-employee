import React, { useState, useEffect } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Image } from "@rneui/themed";
import colors from "../../assets/colors/colors";
import font from "../../assets/fonts/fonts";
import * as Font from "expo-font";

export default function IntroduccionI() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      "SourceSansPro-Regular": require("../../assets/fonts/SourceSansPro-Regular.ttf"),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <View />;
  }

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
  },
  container: {
    textAlign: "center",
    backgroundColor: colors.backgroundMain,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontWeight: 600,
    fontSize: 24,
    fontFamily: "SourceSansPro-Regular",
    lineHeight: 22,
    color: colors.colorTitle,

    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 22,

    letterSpacing: 0.005,
    marginTop: 100,
  },
  text: {
    width: "80%",
    height: 146,
    top: 559.37,

    fontFamily: "SourceSansPro-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 22,
    textAlign: "center",

    fontSize: 20,
  },
  textFooter: {
    fontFamily: "SourceSansPro-Regular",
    fontWeight: 600,
    fontSize: 13,
    lineHeight: 16,
    textAlign: "center",
    marginBottom: 20,
    color: colors.grayFaded,
  },
  img: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    aspectRatio: 1,
    width: "80%",
    marginBottom: 17,
    marginTop: 17,
  },
  doStyle: {
    backgroundColor: colors.grayFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
});

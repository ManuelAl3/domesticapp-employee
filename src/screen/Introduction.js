import React, { useState, useEffect } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import colors from "../assets/colors/colors";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function IntroductionScreen({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      "SourceSansPro-Regular": require("../assets/fonts/SourceSansPro-Regular.ttf"),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <View />;
  }

  const data = [
    {
      index: 1,
      title: "Bienvenido a Domesticapp",
      text: "Creamos un paso a paso para ayudarte a entender qué hacer para recibir tu primer empleo y hacer un mejor uso de la aplicación.",
      image: require("../../assets/introduction/prueba1.png"),
    },
    {
      index: 2,
      title: "Administra tus Horarios",
      text: "Reserva tus horarios, de esta manera estarás organizad Nosotros te avisaremos cuando esten listos los horarios que has reservado.",
      image: require("../../assets/introduction/prueba2.png"),
    },
    {
      index: 3,
      title: "Conoce tus Ganancias",
      text: "Tus ganancias desde la aplicación. Siempre sabrás cuando se ha realizado un pago por ofrecer tus servicios.",
      image: require("../../assets/introduction/prueba3.png"),
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text style={styles.titleStyle}> {item.title} </Text>
          <Image source={item.image} style={styles.img} />
          <Text style={styles.text}> {item.text} </Text>
        </View>
      </SafeAreaProvider>
    );
  };
  const keyExtractor = (item) => {
    //console.log("item", item.index);
    return item.title;
  };
  const renderNextButton = () => {
    return (
      <View style={styles.containerTxtButton}>
        <Text style={styles.txtButton}>Siguiente</Text>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.containerTxtButton} onPress={console.log("press")}>
        <Text style={styles.txtButton}>Hecho</Text>
      </View>
    );
  };
  return (
    <View style={styles.containerSlider}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
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
    backgroundColor: colors.backgroundMain,
    flex: 1,
  },
  container: {
    textAlign: "center",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: "SourceSansPro-Regular",
    fontWeight: "600",
    lineHeight: 22,
    color: colors.colorTitle,

    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 22,

    letterSpacing: 0.005,
    // marginTop: "20%",
  },
  text: {
    width: "80%",

    fontFamily: "SourceSansPro-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 22,
    textAlign: "center",
    fontSize: 20,
    color: colors.colorTitle,
  },
  textFooter: {
    fontFamily: "SourceSansPro-Regular",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 16,
    textAlign: "center",
    marginBottom: 17,
    color: colors.grayFaded,
  },
  img: {
    width: "40%",
    height: 250,

    aspectRatio: 1,
    marginTop: 17,
    marginBottom: 17,
  },
  doStyle: {
    backgroundColor: colors.grayFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
  containerTxtButton: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  txtButton: {
    color: colors.grayNigth,
    fontWeight: "500",
    fontSize: 16,
  },
});

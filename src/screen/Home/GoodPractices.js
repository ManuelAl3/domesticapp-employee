import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
import colors from "../../assets/colors/colors";

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
  };
  return (
    <>
      <BackTitledHeader title="Buenas Prácticas" />
      <View>
        <View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.text}>
              Con Buenas Prácticas, no sólo mejoraran tus reseñas, también tu
              carrera será beneficiada.
            </Text>
          </View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.title}>Buenas Prácticas</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={btnStyle}>
          <Text style={styles.textButton}>Descarga manual</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default GoodPracticesScreen;
const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 19,
    color: "#35435E;",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 26,
    color: "#3D4451",
    marginBottom: 20,
    marginTop: 20,
  },
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
});

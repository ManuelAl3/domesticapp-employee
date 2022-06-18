import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Colors from "../../assets/colors/colors";
import BackTitledHeader from "../../components/BackTitleHeader";

function ReportReview({ navigation }) {
  const [text, onChangeText] = React.useState("");

  // Styles component UI Button
  const btnStyle = {
    height: 55,
    width: "80%",
    paddingHorzontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blue,
    borderRadius: 10,
    marginBottom: 30,
  };

  return (
    <>
      <BackTitledHeader title="Mis reseñas" />
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.title}>Descripción:</Text>
          </View>
        </View>
        <TextInput
          multiline
          numberOfLines={10}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Escribe aquí la descripción del evento que ocasiono el accidente, daño o situación..."
          keyboardType="numeric"
        />
        <View style={styles.containerButtons}>
          <TouchableOpacity style={btnStyle}>
            <Text style={styles.textButton}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnStyle}>
            <Text style={styles.textButton}>Contactar con soporte</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default ReportReview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundMain,
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
  containerButtons: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    margin: 12,
    padding: 20,
    backgroundColor: "#f0fcff",
  },
});

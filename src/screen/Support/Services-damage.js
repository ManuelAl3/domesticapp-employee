import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BackTitleHeader from "../../components/BackTitleHeader";
import colors from "../../assets/colors/colors";
import * as Linking from "expo-linking";

function ServiceDamageScreen({ navigation }) {
  const [text, onChangeText] = React.useState("");
  const URL_ROUTE_SOPORT = () => {
    Linking.openURL("https://wa.me/52618237533");
  };
  const btnStyle = {
    height: 55,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
    marginBottom: 16,
  };
  return (
    <>
      <BackTitleHeader title="Daños y Accidentes" />
      <ScrollView>
        <View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.text}>
              Recuerda que los reportes deben de realizarse dentro de las
              primeras 48hrs.{" "}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.title}>Accidente, Objeto Dañado</Text>
          </View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text
              style={{
                color: "#787B82",
                fontWeight: "500",
                fontSize: 16,
                lineHeight: 20,
              }}
            >
              Adjunta una Imagen o Video de el percance, u objeto dañado, asi
              como una descripción de la eventualidad.
            </Text>
          </View>
        </View>

        <View style={styles.stylesFlatList}></View>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={btnStyle}
            onPress={() => navigation.navigate("InsurancePolicy")}
          >
            <Text style={styles.textButton}>Ver Poliza de Seguros</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={btnStyle}
            onPress={() => navigation.navigate("JobSecurity")}
          >
            <Text style={styles.textButton}>
              Ver Seguridad Laboral Empleados
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginLeft: 25,
          }}
        >
          <Text style={styles.title}>Descripción</Text>
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
        <View
          style={{
            marginLeft: 25,
          }}
        >
          <Text style={styles.title}>Archivos</Text>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.text}>Imagen01.jpeg</Text>
            <Text style={styles.text}>Imagen02.jpg</Text>
            <Text style={styles.text}>Video01.mp4</Text>
          </View>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={btnStyle}>
            <Text style={styles.textButton}>Adjuntar Archivos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={btnStyle}>
            <Text style={styles.textButton}>Empleados</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={btnStyle} onPress={URL_ROUTE_SOPORT}>
            <Text style={styles.textButton}>Contacta con Soporte</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default ServiceDamageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
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
    marginBottom: 20,
    marginTop: 20,
  },
  stylesFlatList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
  containerButton: {
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    margin: 12,
    padding: 20,
    backgroundColor: "#f0fcff",
  },
});

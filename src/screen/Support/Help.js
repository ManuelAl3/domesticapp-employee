import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "@rneui/themed";
import * as React from "react";
import { Preguntas } from "../../constants/preguntasF";
import BackTitledHeader from "../../components/BackTitleHeader";
import colors from "../../assets/colors/colors";
import BottomNavigation from "../../components/BottomNavigation";
import Perfil from "../../assets/Profile/Perfil.png";
import * as Linking from "expo-linking";

const currentService = [
  {
    id: 1,
    img: Perfil,
    nombre: "Maria Ramos Vera",
    descripcion: "Lavado de Ropa, Doblado de Ropa",
    trabajos: "3",
    state: "Activo",
  },
  {
    id: 2,
    img: Perfil,
    nombre: "Venny Rivera Wilson",
    descripcion: "Lavado de Ropa, Doblado de Ropa",
    state: "Programado",
  },
];

const lastService = [
  {
    id: 1,
    img: Perfil,
    nombre: "Maria Ramos Vera",
    descripcion: "Lavado de Ropa, Doblado de Ropa",
    trabajos: "3",
    state: "Finalizado",
  },
  {
    id: 2,
    img: Perfil,
    nombre: "David Vera García",
    descripcion: "Lavado de Ropa, Doblado de Ropa",
    state: "Finalizado",
  },
];

function Help({ navigation }) {
  const URL_ROUTE_SOPORT = () => {
    Linking.openURL("https://wa.me/52618237533");
  };
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
    <ListItem key={item} bottomDivider containerStyle={styles.listStyle}>
      <View key={item.id} style={styles.list}>
        <Image style={{ width: 58, height: 58 }} source={item.img} />
        <View style={{ flex: 1 }}>
          <Text style={styles.textList}>{item.nombre}</Text>
          <Text style={styles.textListDesc}>{item.descripcion}</Text>
          <Text style={styles.textListWorks}>
            {item.trabajos}{" "}
            <Text style={styles.textListState}>{item.state}</Text>
          </Text>
        </View>
      </View>
    </ListItem>
  );
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
      <BackTitledHeader title="Tus Ultimos Servicios" />
      <ScrollView>
        <View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.text}>
              Tus últimos Servicios se mostrarán aquí, así como tu Servicio
              Activo.
            </Text>
          </View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.title}>Servicios en Curso</Text>
          </View>
        </View>
        <View style={styles.stylesFlatList}>
          <FlatList
            keyExtractor={keyExtractor}
            data={currentService}
            renderItem={renderItem}
          />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={btnStyle} onPress={URL_ROUTE_SOPORT}>
            <Text style={styles.textButton}>Contacta con soporte</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.title}>Ultimos Servicios</Text>
          </View>
        </View>
        <View style={styles.stylesFlatList}>
          <FlatList
            keyExtractor={keyExtractor}
            data={lastService}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
      <BottomNavigation />
    </>
  );
}

export default Help;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
  },
  listStyle: {
    flex: 1,
    backgroundColor: " #E5E5E5",
    width: 367,
    height: 45,
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
  textList: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#3D4451",
    paddingLeft: 25,
  },
  textListDesc: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 11,
    lineHeight: 19,
  },
  textListState: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 19,
    color: "#0bbbef",
    alignItems: "flex-end",
  },
  textListWorks: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 11,
    lineHeight: 19,
    color: "#0bbbef",
  },
  list: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
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
});

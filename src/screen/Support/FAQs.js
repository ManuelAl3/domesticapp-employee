import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { ListItem } from "@rneui/themed";
import * as React from "react";
import { Preguntas } from "../../constants/preguntasF";
import BackTitledHeader from "../../components/BackTitleHeader";
import Colors from "../../assets/colors/colors";
import BottomNavigation from "../../components/BottomNavigation";

function FaqsScreen({ navigation }) {
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
    <ListItem
      key={item}
      bottomDivider
      containerStyle={styles.listStyle}
      onPress={() => navigation.navigate(`${item.ruta}`, { itemId: item.id })}
    >
      <View key={item.id} style={styles.list}>
        <Image style={{ width: 58, height: 58 }} source={item.img} />
        <Text
          style={styles.textList}
          onPress={() =>
            navigation.navigate(`${item.ruta}`, { itemId: item.id })
          }
        >
          {item.nombre}
        </Text>
      </View>
    </ListItem>
  );
  return (
    <>
      <BackTitledHeader title="Preguntas Frecuentes" />
      <ScrollView>
        <View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.text}>
              Aquí encontraras una serie de preguntas frecuentes, esperamos te
              sean de ayuda, o comunícate con el Servicio de Soporte y Ayuda
            </Text>
          </View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.title}>Tengo dudas con:</Text>
          </View>
        </View>
        <View style={styles.stylesFlatList}>
          <FlatList
            keyExtractor={keyExtractor}
            data={Preguntas}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
      <BottomNavigation />
    </>
  );
}

export default FaqsScreen;
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
  textList: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#3D4451",
    paddingLeft: 25,
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
});

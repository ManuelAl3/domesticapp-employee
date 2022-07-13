import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { ListItem } from "@rneui/themed";
import { supportOptions } from "../constants/supportO";
import BackTitledHeader from "../components/BackTitleHeader";
import * as Linking from "expo-linking";
import Sup from "../assets/Support/Sup.svg";

function SupportScreen({ navigation }) {
  const keyExtractor = (index) => index.toString();
  const renderItem = ({ item }) => (
    <ListItem
      key={item.id}
      bottomDivider
      containerStyle={styles.listStyle}
      onPress={() => navigation.navigate(`${item.ruta}`, { itemId: item.id })}
    >
      <View key={item.id} style={styles.list}>
        <item.img style={{ width: 58, height: 58 }} source={item.img} />
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
  const URL_ROUTE_SOPORT = () => {
    Linking.openURL("https://wa.me/+18444684329?text=Hola,%20nececito%20ayuda");
  };

  return (
    <>
      <BackTitledHeader title="Centro de Ayuda" />
      <ScrollView>
        <View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.text}>
              Para tu comodidad distintos Artículos donde solucionar tus dudas o
              puedes contactar con nuestro Centro de Soporte y Ayuda.,
            </Text>
          </View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.title}>Temas de Ayuda</Text>
          </View>
        </View>
        <View style={styles.stylesFlatList}>
        
          <FlatList
            keyExtractor={keyExtractor}
            data={supportOptions}
            renderItem={renderItem}
          />
          
        </View>
        <ListItem
            bottomDivider
            containerStyle={styles.listStyle}
            onPress={URL_ROUTE_SOPORT}
          >
            <View style={styles.list}>
              
              <Sup height="58
              " width="58"/>
              <Text style={styles.textList}>Chat de soporte</Text>
            </View>
          </ListItem>
      </ScrollView>
    </>
  );
}

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
    height: 85,
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
  list: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  stylesFlatList: {
    
  },
});

export default SupportScreen;

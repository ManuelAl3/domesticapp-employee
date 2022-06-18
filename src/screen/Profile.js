import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import * as React from "react";
import { useAuth } from "../../src/context/auth-context";
import { showHEmployee } from "../services/hability-employee-services";
import { CategoryLinks } from "../constants/linksPerfil";
import BackTitledHeader from "../components/BackTitleHeader";
import { ListItem } from "@rneui/themed";
import Colors from "../assets/colors/colors";
import Stars from "react-native-stars";
import Star from "../assets/earnings/Star.svg";
import EmptyStar from "../assets/earnings/EmptyStar.svg";
import Rectangle from "../assets/Profile/Rectangle.png";

function ProfileScreen({ navigation }) {
  const { user } = useAuth();
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
    <ListItem
      key={item}
      bottomDivider
      containerStyle={styles.listStyle}
      onPress={() => navigation.navigate(`${item.ruta}`, { itemId: item.id })}
    >
      <View key={item.id} style={styles.list}>
        <Image style={{ width: 30, height: 30 }} source={item.icon} />
        <Text style={styles.textList}>{item.nombre}</Text>
      </View>
    </ListItem>
  );
  return (
    <>
      <BackTitledHeader title="Menú" />
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                marginTop: 16,
              }}
            >
              <View>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                  }}
                  source={user.image_url}
                />
              </View>
              <View
                style={{
                  paddingLeft: 25,
                }}
              >
                <Text style={styles.textUser}>Hola,</Text>
                <Text style={[styles.textUser, { fontWeight: "600" }]}>
                  {user.full_name}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                marginTop: 40,
              }}
            >
              <Stars
                display={4}
                spacing={10}
                count={5}
                starSize={20}
                fullStar={Star}
                emptyStar={EmptyStar}
              />
              <Text style={styles.textStart}>Asociada Activa y Autorizada</Text>
            </View>
            <View>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: 16,
                  lineHeight: 26,
                  color: "#82868D",
                }}
              >
                97% Calificaciones Positivas de todos tus Servicios
              </Text>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: 14,
                  lineHeight: 26,
                  color: "#696A6A",
                }}
              >
                ID: {user.document_id}
              </Text>
            </View>
            <View
              style={{
                height: 100,
              }}
            >
              <View
                style={{
                  position: "relative",
                  height: 100,
                }}
              >
                <View
                  style={{ width: "100%", height: 100, position: "absolute" }}
                >
                  <Image
                    style={{ width: "100%", height: 100 }}
                    source={Rectangle}
                  />
                </View>
                <View
                  style={{
                    width: "350",
                    height: 50,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={styles.textBackground}>Gana Dinero!</Text>
                    <Text style={styles.textBackground}>
                      Conoce Nuestro Sistema de Referidos
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <FlatList
            keyExtractor={keyExtractor}
            data={CategoryLinks}
            renderItem={renderItem}
          />
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.backgroundMain,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  listStyle: {
    flex: 1,
    backgroundColor: Colors.backgroundMain,
    width: 367,
    height: 45,
  },
  textUser: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 32,
    lineHeight: 40,
    color: Colors.colorText,
  },
  textFooter: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 32,
    lineHeight: 40,
  },
  textStart: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 26,
    color: Colors.grayNigth,
  },
  list: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  textList: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 26,
    color: Colors.colorUserName,
    paddingLeft: 20,
  },
  textBackground: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 24,
    color: "#ffff",
  },
});

export default ProfileScreen;

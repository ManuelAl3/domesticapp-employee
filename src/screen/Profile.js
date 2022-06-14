import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import * as React from "react";
import { useAuth } from "../context/auth-context";
import { showHEmployee } from "../services/hability-employee-services";
import { CategoryLinks } from "../constants/linksPerfil";
import BackTitledHeader from "../components/BackTitleHeader";
import { ListItem } from "@rneui/themed";
import Colors from "../assets/colors/colors";

function ProfileScreen({ navigation }) {
  const { user } = useAuth();
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
    <ListItem
      key={item}
      bottomDivider
      containerStyle={{ width: 367, height: 45 }}
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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ScrollView>
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
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
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
});

export default ProfileScreen;

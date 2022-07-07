import React,{useEffect,useState} from "react";
import { Text, useWindowDimensions } from "react-native";
import { View, StyleSheet, FlatList } from "react-native";
import useFetch from "use-http";
import { ListItem, Image } from "@rneui/themed";
import Colors from "../assets/colors/colors";
import { Dashboard } from "../constants/homeDash";

export default function ServiceTypesCatalog({ navigation }) {

  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
    <View style={styles.containerB}>
      <ListItem
        key={item}
        containerStyle={styles.listStyle}
        onPress={() => navigation.navigate(`${item.ruta}`, { itemId: item.id })}
      >
        <View style={styles.containerLogo}>
          <View style={styles.containerLogo}>
            <Image style={{ width: 50, height: 50 }} source={item.img} />
          </View>
          <Text style={styles.textStyle}>{item.nombre}</Text>
        </View>
      </ListItem>
    </View>
  );
    return (
      <View style={styles.stylesFlatList}>
      <FlatList
        numColumns={3}
        keyExtractor={keyExtractor}
        data={Dashboard}
        renderItem={renderItem}
      />
    </View>
    );
}

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: Colors.backgroundMain,
  },
  containerMain: {
    color: Colors.colorUserName,
  },
  stylesFlatList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundMain,
  },
  containerImg: {},
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    flex: 1,
    alignItems: "center",
  },
  containerB: {
    flex: 1,
    textAlign: "center",
    backgroundColor: Colors.backgroundMain,
    borderColor: Colors.black,
  },
  listStyle: {
    flex: 1,
    backgroundColor: Colors.backgroundMain,
  },
  textStyle: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 22,
    paddingTop: 20,
  },
});
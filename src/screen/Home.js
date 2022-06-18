import * as React from "react";
import { Dashboard } from "../constants/homeDash";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { ListItem, Image } from "@rneui/themed";
import Colors from "../assets/colors/colors";
import DashboardMain from "../assets/Home/DashboardMain.png";
import RectangleDivider from "../assets/Home/RectangleDivider.svg";
import NavBar from "../components/navbar/NavBar";

function HomeScreen({ navigation }) {
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
    <>
      <NavBar />
      <SafeAreaView style={styles.containerSafe}>
        <ScrollView style={styles.scrollView}>
          <View>
            <View style={styles.containerImg}>
              <Image
                containerStyle={{
                  width: "100%",
                  aspectRatio: 1,
                  flex: 1,
                }}
                source={DashboardMain}
              />
            </View>
            <View style={styles.divider}>
              <Image
                style={{ width: 350, height: 3 }}
                source={RectangleDivider}
              />
            </View>
          </View>
          <View style={styles.stylesFlatList}>
            <FlatList
              numColumns={3}
              keyExtractor={keyExtractor}
              data={Dashboard}
              renderItem={renderItem}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;

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

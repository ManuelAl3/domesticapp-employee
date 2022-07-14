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
import { vw, vh } from "react-native-expo-viewport-units";

function HomeScreen({ navigation }) {
  const keyExtractor = (index) => index.toString();
  const renderItem = ({ item }) => (
    <View style={styles.containerB}>
      <ListItem
        key={item}
        containerStyle={styles.listStyle}
        onPress={() => navigation.navigate(`${item.ruta}`, { itemId: item.id })}
      >
        <View style={styles.containerLogo}>
          <View >
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
        <ScrollView>
          <View>
            <View>
              <Image
                style={{
                  width: vw(100),
                  height: vh(40),
                  aspectRatio: 2,
                  flex: 1,
                }}
                source={DashboardMain}
              />
            </View>
            <View style={styles.divider}>
              <RectangleDivider
                style={{
                  width: 350,
                  height: 3,
                  marginTop: 20,
                  marginBottom: 20,
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
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
    
    marginBottom: 10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  row: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: "90%",
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: 20,
    alignItems: "flex-start"
  },
  containerLogo: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

  },
  logoContainer: {
    height: "30vh",
  },
  divider: {
    flex: 1,
    
  },
  containerB: {
    flex:1/3,
    flexDirection: "column",
    display: "flex",
    justifyContent: "flex-start",
  },
  listStyle: {
    flex: 1,
    backgroundColor: Colors.backgroundMain,
   
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  textStyle: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 18,
    paddingTop: 20,
    textAlign: "center",
  },
});

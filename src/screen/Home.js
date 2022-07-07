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
import { vw, vh} from 'react-native-expo-viewport-units';

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
                style={{ width: 350, height: 3, marginTop: 20, marginBottom: 20 }}
              />
            </View>
          </View>
          <View style={styles.row}>
          <View style={styles.stylesFlatList}>
      
    </View>
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
    alignItems: "center",
    marginBottom: 10,
  },
  row: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-between',
    marginLeft: 30
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    height: "30vh",
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

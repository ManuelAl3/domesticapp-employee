import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { ListItem } from "@rneui/themed";
import Colors from "../../assets/colors/colors";
import { Dashboard } from "../../constants/homeDash";
import DashboardMain from "../../assets/Home/DashboardMain.svg";
import RectangleDivider from "../../assets/Home/RectangleDivider.svg";

export default function DashboardScreen({ navigation: { navigate } }) {
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
    <View style={styles.containerB}>
      <ListItem
        key={item}
        containerStyle={styles.listStyle}
        onPress={() => navigate("Users")}
      >
        <View>
          <View style={styles.containerLogo}>
            <Image style={{ width: 100, height: 100 }} source={item.img} />
          </View>
          <Text style={styles.textStyle}>{item.nombre}</Text>
        </View>
      </ListItem>
    </View>
  );
  return (
    <SafeAreaView style={styles.containerSafe}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.containerTextDash}>
            <Text style={styles.textDash}>
              Ambientes limpios, {"\n"}personas felices.
            </Text>
          </View>
          <View style={styles.containerImg}>
            <Image style={{ width: 378, height: 322 }} source={DashboardMain} />
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
            numColumns={2}
            keyExtractor={keyExtractor}
            data={Dashboard}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
  containerTextDash: {
    position: "absolute",
    zIndex: 1,
    width: 249,
    height: 45,
  },
  containerImg: {
    top: -35,
    left: 36,
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
  textDash: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 26,
    color: Colors.colorTitle,
  },
  textStyle: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 22,
  },
});

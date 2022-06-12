import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { ListItem } from "@rneui/themed";
import LogoCalendar from "../../assets/svg/Calendar";
import LogoReview from "../../assets/svg/Review";
import Colors from "../../assets/colors/colors";

const listButtons = [
  {
    id: 1,
    title: "Calendario",
    image: LogoCalendar,
  },
  {
    id: 2,
    title: "Calendario",
    image: require("../../assets/Home/Calendar.svg"),
  },
  {
    id: 3,
    title: "Calendario",
    image: require("../../assets/Home/Calendar.svg"),
  },
  {
    id: 4,
    title: "Calendario",
    image: require("../../assets/Home/Calendar.svg"),
  },
];

export default function DashboardScreen({ navigation: { navigate } }) {
  // const ref = React.useRef(null);
  return (
    <SafeAreaView style={styles.containerSafe}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.textDash}>
            Ambientes limpios, {"\n"}personas felices.
          </Text>
        </View>
        {listButtons.map((l, i) => (
          <View style={styles.containerB}>
            <ListItem
              numColumns={2}
              key={i}
              containerStyle={styles.listStyle}
              onPress={() => navigate("Users")}
            >
              <View>
                <View style={styles.containerLogo}>
                  <LogoCalendar />
                </View>
                <Text style={styles.textStyle}>{l.title}</Text>
              </View>
            </ListItem>
          </View>
        ))}
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
  containerB: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 159,
    width: 150,
    textAlign: "center",
    backgroundColor: Colors.backgroundMain,
    borderColor: Colors.black,
  },
  listStyle: {
    flex: 1,
    backgroundColor: Colors.backgroundMain,
  },
  textDash: {
    left: 13,
    top: 89,

    fontFamily: "Poppins",
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
  scrollView: {
    marginHorizontal: 15,
    backgroundColor: Colors.backgroundMain,
  },
  containerLogo: {},
});

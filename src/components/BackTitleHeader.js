import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import BackIcon from "../assets/ui/back-button.svg";
import { useNavigation } from "@react-navigation/native";
import Colors from "../assets/colors/colors";

export default function BackTitledHeader(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableHighlight
        onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}
      >
        <Image style={{ width: 35, height: 35 }} source={BackIcon} />
      </TouchableHighlight>
      <Text numberOfLines={1} style={styles.title}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.backgroundMain,
    padding: 20,
    flexDirection: "row",
  },
  title: {
    color: "#82868D",
    fontSize: 24,
    fontWeight: "600",
    marginLeft: 20,
    flex: 1,
  },
});

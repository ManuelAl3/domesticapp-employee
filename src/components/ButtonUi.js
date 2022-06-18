import { Text, View, StatusBar, Image, Button, StyleSheet } from "react-native";
import colors from "../assets/colors/colors";

import React from "react";

export default function ButtonUi() {
  return (
    <>
      <Button
        onPress={() => console.log("event")}
        title="Descarga manual"
        color={colors.blue}
      />
      <Text style={styles.textButton}>Descarga manual</Text>
    </>
  );
}

const styles = StyleSheet.create({
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
  },
});

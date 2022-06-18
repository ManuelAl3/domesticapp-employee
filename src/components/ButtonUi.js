import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../assets/colors/colors";

import React from "react";

export default function ButtonUi() {
  const btnStyle = {
    height: 55,
    width: "80%",
    paddingHorzontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
  };
  return (
    <>
      <TouchableOpacity style={btnStyle}>
        <Text style={styles.textButton}>Descarga manual</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
});

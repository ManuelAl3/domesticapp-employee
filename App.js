import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as React from "react";
import IntroduccionI from "./components/introduccion/IntroduccionI";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return <IntroduccionI />;
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});

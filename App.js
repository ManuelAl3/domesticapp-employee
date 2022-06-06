import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import IntroduccionI from "./components/Introduccion/IntroduccionI";

export default function App() {
  return <IntroduccionI />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

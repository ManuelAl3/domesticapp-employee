import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import BackTitledHeader from "../components/BackTitleHeader";

function CalendarScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <BackTitledHeader title="Mi Calendario" />
      <Text>Calendar Screen</Text>
    </View>
  );
}

export default CalendarScreen;
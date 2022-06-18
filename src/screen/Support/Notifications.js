import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import BackTitleHeader from "../../components/BackTitleHeader";

function NotificationScreen({ navigation }) {
  return (
    <>
      <BackTitleHeader title="Notificaciones" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Notification Screen</Text>
      </View>
    </>
  );
}

export default NotificationScreen;

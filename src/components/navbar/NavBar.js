import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { useAuth } from "../../context/auth-context";

export default function NavBar() {
  const { user } = useAuth();
  return (
    <SafeAreaView style={{ height: 75 }}>
      <View style={styles.headerContainer}>
        <Image style={{ width: 40, height: 40 }} source={user.image_url} />
        <View style={{ paddingLeft: 10 }}>
          <View style={styles.containerUserData}>
            <Text style={styles.title}>Hola, </Text>
            <Text style={[styles.title, { fontWeight: "600" }]}>
              {user.full_name} !
            </Text>
          </View>
          <Text style={styles.gmailText}>{user.email}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 75,
  },
  containerUserData: {
    flex: 2,
    flexDirection: "row",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 22,
    color: "#3D4451",
  },
  gmailText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 22,
    color: "#757575",
  },
});

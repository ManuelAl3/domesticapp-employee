import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { useAuth } from "../../context/auth-context";
import { vw, vh } from "react-native-expo-viewport-units";

export default function NavBar() {
  const {user} = useAuth();

  return (
     <SafeAreaView style={{ height: 75 }}>
      <View style={styles.headerContainer}>
    {
      user ? (
       <View style ={{marginLeft: 25, backgroundColor: "#fff", width: vw(90), height: vh(8), flexDirection: "row", marginTop:8}}>
       <Image style={{ width: 40, height: 40, borderRadius: 50, marginTop: 10}} source={{uri: user.image_url}} />
        <View style={{ paddingLeft: 10, marginVertical: 10 }}>
          <View style={styles.containerUserData}>

            <Text style={styles.title}>Hola, </Text>
            <Text style={[styles.title, { fontWeight: "600" }]}>
              {user.full_name}!
            </Text>
          </View>
          <Text style={styles.gmailText}>{user.email}</Text>
        </View>
        </View>
      ) : null
    }
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    
  },
  containerUserData: {
    flex: 2,
    flexDirection: "row",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
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

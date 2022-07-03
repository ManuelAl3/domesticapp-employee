import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as React from "react";
import IconVerify from "../../assets/verify/verify.png";
import Colors from "../../assets/colors/colors";
import { Input } from "@rneui/themed";

export default function Verification() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.blue,
      }}
    >
      <View
        style={{
          backgroundColor: Colors.blue,
          height: "40%",
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.blue,
          }}
        >
          <Image style={{ width: 140, height: 140 }} source={IconVerify} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#FBFBFB",
        }}
      >
        <View
          style={{
            width: "80%",
            backgroundColor: "#FBFBFB",
            textAlign: "center",
          }}
        >
          <Text style={styles.title}>Verification</Text>
          <Text style={styles.text}>
            We will send 4 digits code to your phone number for the
            verification.
          </Text>
          <Input
            placeholder="Enter Phone number"
            containerStyle={styles.input}
          />
          <Button
            title="Continue"
            containerStyle={{
              width: 370,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            radius={20}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 13,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 28,
    lineHeight: 42,
    color: "#3D4451",
  },
  text: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 26,
    textAlign: "center",
    color: "#787B82",
  },
  input: {
    marginTop: 30,
    marginBottom: 30,
    borderColor: "#0BBBEF",
  },
});

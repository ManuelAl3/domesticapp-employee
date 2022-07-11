import React, { Component, useState, useEffect } from 'react';
import {
  View, Button,
  StatusBar,StyleSheet,
  TextInput,Image, Platform,
  Animated,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { BASE_URI } from "../../../config";
import axios, { post } from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../context/auth-context';
import colors from '../../assets/colors/colors';

const ReportScreen = ({route, navigation}) => {

const [image, setImage] = React.useState(null);
const [text, onChangeText] = React.useState("");
  const { user } = useAuth();
  const { itemId } = route.params;
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  async function onSubmit() {
    
    const formData = new FormData();
    formData.append("cover", {
      uri: image,
      type: "image/jpeg",
      name: `service_report.jpg`,
    });
    formData.append("body", text);
    formData.append("order_detail_id", itemId);
    formData.append("employee_id", user.id);

    const token = await AsyncStorage.getItem('token');
    const url = `${BASE_URI}/service_reports`;
    const config = {
      headers: {
        "Authorization": `Token token=${token}`,
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config).then(()=>{
      createTwoButtonAlert()
    });
  }
  const btnStyle = {
    height: 55,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
    marginBottom: 16,
  };

  const createTwoButtonAlert = () =>
  Alert.alert(
    "¡Reporte enviado!",
    "¡Se le ha informado a un administrador su caso!",
    [
      { text: "OK", onPress: () => navigation.goBack() }
    ]
  );



  return (
    <View style={{ flex: 1, padding: 30, backgroundColor: '#f5fcff' }}>
       <View
          style={{
            marginLeft: 25,
          }}
        >
        
          <Text style={styles.title}>Motivo de incapacidad</Text>
        </View>

        <TextInput
          multiline
          numberOfLines={10}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Escribe aquí la descripción del evento que ocasiono el accidente, daño o situación..."
        />
        <View
          style={{
            marginLeft: 25,
          }}
        >
          <Text style={styles.title}>Archivos</Text>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 60, height: 60 }}
              />
            )}
          </View>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={btnStyle} onPress={pickImage}>
            <Text style={styles.textButton}>Adjuntar Archivos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={btnStyle} onPress={onSubmit}>
            <Text style={styles.textButton}>Enviar Reporte</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 19,
    color: "#35435E",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 26,
    color: "#3D4451",
    marginBottom: 20,
    marginTop: 20,
  },
  stylesFlatList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
  containerButton: {
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    margin: 12,
    padding: 20,
    backgroundColor: "#f0fcff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#0BBBEF",
  },
  buttonClose: {
    backgroundColor: "#0BBBEF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
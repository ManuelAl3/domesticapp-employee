import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import BackTitleHeader from "../../components/BackTitleHeader";
import colors from "../../assets/colors/colors";
import * as Linking from "expo-linking";
import * as ImagePicker from "expo-image-picker";
import { useAuth } from "../../context/auth-context";
import { showOrderEmployee } from "../../services/order-details-services";
import { vw, vh } from "react-native-expo-viewport-units";
import { BASE_URI } from "../../../config";
import axios, { post } from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


 function  ServiceDamageScreen({ navigation}) {
  const { user } = useAuth();
  
  React.useEffect(() => {
    showOrderEmployee(user.id).then(setOrders);
  }, []);
  const [orders, setOrders] = React.useState(null);
  const [fecha, setFecha] = React.useState(null);
  const [customer, setCustomer] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [text, onChangeText] = React.useState("");
  const URL_ROUTE_SOPORT = () => {
    Linking.openURL("https://wa.me/+18444684329?text=Hola,%20nececito%20ayuda");
  };
  const btnStyle = {
    height: 55,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
    marginBottom: 16,
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  async function onSubmit() {
    const type = "Empleado";
    const formData = new FormData();
    formData.append("cover", {
      uri: image,
      type: "image/jpeg",
      name: `reporte.jpg`,
    });
    formData.append("body", text);
    formData.append("name", type);
    formData.append("employee_id", user.id);
    formData.append("customer_id", customer);

    const token = await AsyncStorage.getItem('token');
    const url = `${BASE_URI}/reports`;
    const config = {
      headers: {
        "Authorization": `Token token=${token}`,
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config).then(()=>{
      createTwoButtonAlert();
    });
  }

  

  const createTwoButtonAlert = () =>
  Alert.alert(
    "¡Reporte enviado!",
    "¡Se le ha informado a un administrador su caso!",
    [
      { text: "OK", onPress: () => navigation.goBack() }
    ]
  );


  let services = [];
  if (orders && services.length === 0) {
    orders.forEach((order) => {
      const date = new Date(order.start_date);
      const now = new Date();
      if (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth()
      ) {
        if (
          now.getDate() >= date.getDate() &&
          now.getDate() <= date.getDate() + 2
        ) {
          services.push(order);
        }
      }
    });
  }
  function handleGetCustomer(service) {
    setCustomer(service.customer.id);
    setFecha(service.start_date)
    setModalVisible(!modalVisible);
  }

  function MyContract(){
    
    Linking.openURL("https://domesticapp-storage.s3.us-east-2.amazonaws.com/pdf/Poliza.pdf");
  }

  return (
    <>
      <BackTitleHeader title="Daños y Accidentes" />
      <ScrollView>
        <View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.text}>
              Recuerda que los reportes deben de realizarse dentro de las
              primeras 48hrs.{" "}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.title}>Accidente, Objeto Dañado</Text>
          </View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text
              style={{
                color: "#787B82",
                fontWeight: "500",
                fontSize: 16,
                lineHeight: 20,
              }}
            >
              Adjunta una Imagen o Video de el percance, u objeto dañado, asi
              como una descripción de la eventualidad.
            </Text>
          </View>
        </View>

        <View style={styles.stylesFlatList}></View>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={btnStyle}
            onPress={MyContract}
          >
            <Text style={styles.textButton}>Ver Poliza de Seguros</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.container}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Servicio a reportar</Text>
          </Pressable>
        </View>

        <View
          style={{
            marginLeft: 25,
          }}
        >
        {
          fecha ? ( <Text style={styles.title}>{fecha}</Text>) : null
        }
       
          <Text style={styles.title}>Descripción</Text>
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
        <View style={styles.containerButton}>
          <TouchableOpacity style={btnStyle} onPress={URL_ROUTE_SOPORT}>
            <Text style={styles.textButton}>Contacta con Soporte</Text>
          </TouchableOpacity>
        </View>

        {/*MODAL REPORT*/}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                {services.length !== 0 ? (
                  <>
                    {services.map((service, index) => (
                      <View
                        key={index}
                        style={{
                          flexDirection: "column",
                          backgroundColor: "#F0FCFF",
                          marginVertical: 10,
                          borderRadius: 20,
                          padding: 10,
                        }}
                      >
                        <Pressable
                          onPress={() => handleGetCustomer(service)}
                        >
                          <View style={{ width: vw(80), flexDirection: "row" }}>
                            <Image
                              style={{
                                width: 70,
                                height: 70,
                                borderRadius: 50,
                                alignSelf: "center",
                                marginHorizontal: 10,
                              }}
                              source={{ uri: service.customer.image_url }}
                            />
                            <View
                              style={{
                                width: vw(60),
                                alignSelf: "flex-end",
                                paddingHorizontal: 10,
                              }}
                            >
                              <Text style={style.cardTitle}>
                                {service.start_date +
                                  " " +
                                  service.service_time}
                              </Text>
                              <Text style={style.cardWork}>
                                Jornada: {service.workday}
                              </Text>
                              <Text style={style.text}>
                                {service.customer.full_name}
                              </Text>
                            </View>
                          </View>
                        </Pressable>
                      </View>
                    ))}
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Cerrar</Text>
                    </Pressable>
                  </>
                ) : (
                  <>
                    <Text style={styles.modalText}>
                      Sin servicios (48 hrs maximo).
                    </Text>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Cerrar</Text>
                    </Pressable>
                  </>
                )}
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
}

export default ServiceDamageScreen;

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

const style = StyleSheet.create({
  card: {
    backgroundColor: "#F0FCFF",
    borderBottomColor: "#0BBBEF",
    borderBottomWidth: 1,
    padding: 20,
    marginVertical: 15,
    marginBottom: 120,
    marginHorizontal: 20,
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 10,
  },
  cardWork: {
    fontSize: 18,
    color: "#787B82",
    textAlign: "right",
  },
  text: {
    fontSize: 18,
    textAlign: "left",
    color: "#000",
    width: 280,
    padding: 10,
  },
  mainScreen: {},
  fill: {},
  mainPadding: {},
  p: {},
  h2: {},
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
  title: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 26,
    color: "#3D4451",
    marginBottom: 20,
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

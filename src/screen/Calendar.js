import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  Image, Alert, Modal, Pressable,
} from "react-native";
import * as React from "react";
import BackTitledHeader from "../components/BackTitleHeader";
import { showOrderEmployee } from "../../src/services/order-details-services";

import { Calendar } from "react-native-calendars";
import colors from "../../src/assets/colors/colors";
import ModalCal from "../components/calendar/Modal";
import * as Linking from 'expo-linking';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/auth-context";

function CalendarScreen({ navigation }) {

  const btnStyle = {
    height: 55,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
    marginBottom: 16,
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <BackTitledHeader title="Mi calendario" />
      <View style={style.mainScreen}>
        <ScrollView
          style={style.fill}
          contentContainerStyle={style.mainPadding}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <View>
              <View>
                <View
                  style={{
                    marginLeft: 25,
                  }}
                >
                  <Text style={style.text}>
                    Recuerda que los reportes deben de realizarse dentro de las
                    primeras 48 horas.
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 25,
                  }}
                >
                  <Text style={style.title}>
                    Seleccionar fechas en el calendario:
                  </Text>
                </View>
              </View>
              <Calendar />
              {/* Card */}
              <DayCard />
            </View>
          </View>
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default CalendarScreen;

export function DayCard() {
  const auth = React.useContext(AuthContext);
  React.useEffect(() => {
    showOrderEmployee(49).then(setOrders)
  },[]);
  const [orders, setOrders] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();
   
  function backDate() {
    if(count > 0){
    setCount(count-1)}
  }
  function nextDate() {
    if(orders){
    if(count+1 < orders.length){
    setCount(count+1)}}
  }
  function GoogleAddres(address){
    Linking.openURL(`http://maps.google.com/?q=1200 ${address}`);
  }

  function goReport() {
    setModalVisible(!modalVisible)
    navigation.navigate("ReportCalendar")
  }

 
  return (
    <>
    <View style={style.card}>
    {
      orders ? (
        orders.length > 0 ? (
          <>
        <Button title="<" onPress={()=>backDate()}/>
        <Button title=">" onPress={()=>nextDate()}/>
        <Text style={style.cardTitle}>{orders[count].start_date}</Text>
        <Text style={style.cardTitle}>Jornada: {orders[count].workday}</Text>
        <Image style={{ width: 30, height: 30 }} source={orders[count].customer.image_url} />
        <Text style={style.text}>{orders[count].customer.full_name}</Text>

        
       </>
        ) : <Text style={style.text}>No se han a??adido servicios</Text>
        
       ) : (
        <Text style={style.text}>No se han a??adido servicios</Text>
      )
    }
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          {orders ? (
            orders.length > 0 ? (
           <>
        <Text style={style.cardTitle}>{orders[count].start_date}</Text>
        {
          orders[count].workday === "Completa" ? (
            <Text style={style.cardTitle}>{orders[count].service_time} - {parseInt((orders[count].service_time.split(":")[0]))+9+":"+(orders[count].service_time.split(":")[1])}</Text>
          ) : orders[count].workday === "Media" ? (
            <Text style={style.cardTitle}>{orders[count].service_time} - {(parseInt((orders[count].service_time.split(":")[0]))+4)+":"+(parseInt((orders[count].service_time.split(":")[1]))+30)}</Text>
          ) : orders[count].workday === "Hora" ? (
            <Text style={style.cardTitle}>{orders[count].service_time} - {(parseInt((orders[count].service_time.split(":")[0]))+parseInt(orders[count].hours))+":"+(orders[count].service_time.split(":")[1])}</Text>
          ) : null
        }
        <Text style={style.cardTitle}>Jornada: {orders[count].workday}</Text>
        <Image style={{ width: 30, height: 30 }} source={orders[count].customer.image_url} />
        <Text style={style.text}>{orders[count].customer.full_name}</Text>
        <Text style={style.text}>{orders[count].category.category_name}</Text>
        <Text style={style.text}>{orders[count].address}</Text>
        <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => GoogleAddres(orders[count].address)}>
              <Text style={styles.textStyle}>Ver Direcci??n en el Mapa</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Regresar a Calendario</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => goReport()}>
              <Text style={styles.textStyle}>Reportar Incapacidad</Text>
            </Pressable>
       </>   
            ) : <Text style={styles.modalText}>No hay m??s informaci??n</Text>
        
       ) : (
        <Text style={styles.modalText}>No hay m??s informaci??n</Text>
      )}
           
            
            
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Ver m??s detalles</Text>
      </Pressable>
    </View>
    </>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: "#F0FCFF",
    borderBottomColor: "#0BBBEF",
    borderBottomWidth: 1,
    padding: 20,
    marginVertical: 15,
  },
  cardTitle: {
    fontSize: 21,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#787B82",
    marginBottom: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
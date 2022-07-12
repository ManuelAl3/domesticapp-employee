import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image, Alert, Modal, Pressable,
} from "react-native";
import * as React from "react";
import BackTitledHeader from "../components/BackTitleHeader";
import { showOrderEmployee } from "../../src/services/order-details-services";
import { Calendar } from "react-native-calendars";
import colors from "../../src/assets/colors/colors";
import * as Linking from 'expo-linking';
import { useNavigation } from "@react-navigation/native";
import { vw, vh } from "react-native-expo-viewport-units";
import { useAuth } from "../context/auth-context";
import { COLORS } from "../../config";

let date = {};

function CalendarScreen({ navigation }) {
  const { user } = useAuth();
  React.useEffect(() => {
    showOrderEmployee(user.id).then(setOrders)
  },[]);
  const [orders, setOrders] = React.useState(null);

  if(orders){
    orders.forEach((item)=>{
      date[item.start_date] = {
        selected: true,
        marked: true,
      };
    })
  }

  return (
    <>
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
              <Calendar 
                markedDates={date}     
              />
              {/* Card */}
              <DayCard />
            </View>
          </View>
          
        </ScrollView>
      </View>
    </>
  );
}

export default CalendarScreen;

export function DayCard() {
  const { user } = useAuth();
  React.useEffect(() => {
    showOrderEmployee(user.id).then(setOrders)
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

  function goReport(id) {
    setModalVisible(!modalVisible)
    navigation.navigate("ReportCalendar", { itemId: id })
  }

  return (
    <>
    <View style={style.card}>
    {
      orders ? (
        orders.length > 0 ? (
          <View >
          
        <View style={{  flexDirection: "row", alignItems: 'center' }}>
        <View style={{flexDirection: "row", marginBottom: 5, marginRight: 15,}}>
        <Pressable style={{ marginRight: 2, borderRadius: 15,padding: 10, elevation: 2, backgroundColor: "#0BBBEF", width: 40, height: 40,}} onPress={()=>backDate()}>
        <Text style={styles.textStyle}>{"<"} </Text>
        </Pressable>
        <Pressable style={{ marginLeft: 2, borderRadius: 15,padding: 10, elevation: 2, backgroundColor: "#0BBBEF", width: 40, height: 40,}} onPress={()=>nextDate()}>
        <Text style={styles.textStyle}>{">"} </Text>
        </Pressable>
    </View>
          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={style.cardTitle}>
              {orders[count].start_date}
            </Text>
          </View>
          
          <View>
            <Text style={style.textT}>{orders[count].service_time}</Text>
            <Text style={{  fontSize: 10 }}>
              {orders[count].workday}
            </Text>
          </View>
        </View>
        <View style={style.container}>
          <Image style={{width: 60, height: 60, borderRadius: 50,}} source={{uri: orders[count].customer.image_url}} />
          <View style={style.rightSide}>
            <Text style={style.name}>{orders[count].customer.full_name}</Text>
            <Text numberOfLines={1}>{orders[count].category.body}</Text>
            
          </View>
        </View>
      </View>
   
        
        ) : <Text style={style.text}>No se han añadido servicios</Text>
        
       ) : (
        <Text style={style.text}>No se han añadido servicios</Text>
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
              <Text style={styles.textStyle}>Ver Dirección en el Mapa</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Regresar a Calendario</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => goReport(orders[count].id)}>
              <Text style={styles.textStyle}>Reportar Incapacidad</Text>
            </Pressable>
       </>   
            ) : <Text style={styles.modalText}>No hay más información</Text>
        
       ) : (
        <Text style={styles.modalText}>No hay más información</Text>
      )}
         
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Ver más detalles</Text>
      </Pressable>
    </View>
    </>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: COLORS.lightBlue,
    borderBottomColor: "#0BBBEF",
    borderBottomWidth: 1,
    padding: 20,
    marginVertical: 15,
  },
  cardTitle: {
   
    fontSize: 20,
    marginBottom: 10,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  rightSide: {
    flex: 1,
    marginLeft: 10,
  },
  statusContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  name: {
    fontWeight: "500",
    fontSize: 16,
  },
  statusText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: "600",
  },
  textT: {
    fontSize: 14,
    textAlign: "center",
    color: "#787B82",
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
    backgroundColor: '#F0FCFF',
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
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#0BBBEF',
  },
  buttonClose: {
    backgroundColor: '#0BBBEF',
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
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import BackTitledHeader from "../components/BackTitleHeader";
import { showOrderEmployee } from "../../src/services/order-details-services";
import { useAuth } from "../context/auth-context";
import { Calendar } from "react-native-calendars";
import colors from "../../src/assets/colors/colors";

function CalendarScreen({ navigation }) {
  /* const { user } = useAuth();
  const [orders, setOrders] = React.useState(null); */

  /* React.useEffect(() => {
    showOrderEmployee(user.id).then(setOrders);
  }, [user.id]); */
  //console.log(orders);
  /* {orders.map((item) => (
        <Text>{item.orders}</Text>
      ))} */
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
              <Calendar />
              {/* Card */}
              <DayCard />
            </View>
          </View>
          <View style={style.containerButton}>
            <TouchableOpacity style={btnStyle}>
              <Text style={style.textButton}>Ir a Proximo Servicio</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default CalendarScreen;

export function DayCard() {
  return (
    <View style={style.card}>
      <Text style={style.cardTitle}>Jueves, 11 de Mayo</Text>
      <Text style={style.text}>No se han añadido servicios</Text>
    </View>
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
});

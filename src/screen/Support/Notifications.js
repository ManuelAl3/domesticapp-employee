import { Text, View, StyleSheet, Image } from "react-native";
import * as React from "react";
import BackTitleHeader from "../../components/BackTitleHeader";
import notification from "../../assets/notifications/notification.png";
import Delete from "../../assets/notifications/Delete.png";

// <BackTitleHeader title="Notificaciones" /> { navigation }

function NotificationScreen({ navigation }) {
  return (
    <>
      <BackTitleHeader title="Notificaciones" />
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            background: "#f0fcff",
            flexDirection: "row",
            paddingVertical: 10,
            paddingHorizontal: 10,
            width: "90%",
            borderRadius: 10,
          }}
        >
          <View>
            <Image source={notification} style={{ width: 32, height: 32 }} />
          </View>
          <View>
            <Text style={styles.title}>Nuevas Habilidades Disponibles!</Text>
            <Text style={styles.text}>
              Hemos agregado 2 nuevas Habilidades a nuestro Sistema de
              Habilidades;- Limpieza de Automóvil- Destapar Inodoros
              Desbloquealas para obtener más oportunidades laborales!
            </Text>
            <View style={{ alignItems: "flex-end" }}>
              <Text>
                12/05/20 22:28
                <Image source={Delete} style={{ width: 27, height: 27 }} />
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default NotificationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "#E5E5E5",
  },
  listStyle: {
    flex: 1,
    backgroundColor: " #E5E5E5",
    width: 367,
    height: 45,
  },
  text: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: "#3D435E",
  },
  textFecha: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 22,
    color: "#BABABA",
  },
  title: {
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 22,
    color: "#3D435E",
  },
  textList: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#3D4451",
    paddingLeft: 25,
  },
  list: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  stylesFlatList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

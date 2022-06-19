import { Text, View, StyleSheet, Image, SafeAreaView } from "react-native";
import * as React from "react";
import BackTitleHeader from "../../components/BackTitleHeader";
import notification from "../../assets/notifications/notification.png";
import Delete from "../../assets/notifications/Delete.png";

function NotificationScreen({ navigation }) {
  return (
    <>
      <BackTitleHeader title="Notificaciones" />
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <View>
          <View
            style={{
              background: "#f0fcff",
              flexDirection: "row",
              paddingVertical: 10,
              paddingHorizontal: 10,
              width: "95%",
              borderRadius: 10,
            }}
          >
            <Image
              source={notification}
              style={{ width: 32, height: 32, paddingRight: 30 }}
            />
            <View>
              <View>
                <Text style={styles.title}>
                  Nuevas Habilidades Disponibles!
                </Text>
                <View style={{ width: "100%", height }}>
                  <Text style={styles.text}>
                    Hemos agregado 2 nuevas Habilidades a nuestro Sistema de
                    Habilidades;- Limpieza de Automóvil- Destapar Inodoros
                    Desbloquealas para obtener más oportunidades laborales!
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text>
                  12/05/20 22:28
                  <Image source={Delete} style={{ width: 27, height: 27 }} />
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
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
  text: {
    width: "50%",
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
});

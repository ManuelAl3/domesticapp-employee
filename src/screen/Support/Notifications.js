import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import * as React from "react";
import BackTitleHeader from "../../components/BackTitleHeader";
import notification from "../../assets/notifications/notification.png";
import Delete from "../../assets/notifications/Delete.png";
import { Card } from "@rneui/themed";
import colors from "../../assets/colors/colors";
import { ListItem } from "@rneui/themed";

const dataNoti = [
  {
    id: 1,
    title: "Nuevas Habilidades Disponibles!",
    numHabili: 2,
    hab1: "Limpieza de Automóvil",
    hab2: "Destapar Inodoros",
  },
];

function NotificationScreen({ navigation }) {
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
    <ListItem key={item} bottomDivider containerStyle={styles.listStyle}>
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
        <View
          style={{
            width: "15%",
          }}
        >
          <Image
            source={notification}
            style={{ width: 32, height: 32, marginRight: 20 }}
          />
        </View>
        <View
          style={{
            width: "85%",
          }}
        >
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.text}>
              <Text>
                Hemos agregado {item.numHabili} nuevas Habilidades a nuestro
                Sistema de Habilidades;
              </Text>
              <Text>{item.hab1}</Text>
              <Text>{item.hab2}</Text>
              <Text>
                Desbloquealas para obtener más oportunidades laborales!
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#BABABA" }}>12/05/20 22:28</Text>
            <Image
              source={Delete}
              style={{
                width: 27,
                height: 27,
                marginLeft: 20,
                marginRight: "40%",
              }}
            />
          </View>
        </View>
      </View>
    </ListItem>
  );
  const onRemove = (id) => (e) => {
    setDatos();
  };
  return (
    <>
      <BackTitleHeader title="Notificaciones" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: colors.backgroundMain,
        }}
      >
        <FlatList
          keyExtractor={keyExtractor}
          data={dataNoti}
          renderItem={renderItem}
        />
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

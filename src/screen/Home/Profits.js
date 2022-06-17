import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
import { useAuth } from "../../context/auth-context";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Colors from "../../assets/colors/colors";
import RectangleDivider from "../../assets/Home/RectangleDivider.svg";
import IconPlanet from "../../assets/earnings/IconPlanet.svg";
import IconCard from "../../assets/earnings/IconCard.svg";
import EmptyStar from "../../assets/earnings/EmptyStar.svg";
import Star from "../../assets/earnings/Star.svg";
import Speedometer from "react-native-speedometer-chart";
import Stars from "react-native-stars";
import * as Progress from "react-native-progress";
import CircularProgress from "react-native-circular-progress-indicator";

const dataList = [
  {
    id: 1,
    titulo: "PERIODO:",
    texto: "21/05/2022 - 05/06/2022",
  },
  {
    id: 2,
    titulo: "JORDNADAS COMPLETAS:",
    texto: "8 Jornadas",
  },
  {
    id: 3,
    titulo: "MEDIAS JORNADAS:",
    texto: "6 Medias Jornadas",
  },
  {
    id: 4,
    titulo: "GANANCIA BRUTA JORNADA COMPLETA:",
    texto: "40.000 COP",
  },
  {
    id: 5,
    titulo: "GANANCIA BRUTA MEDIA JORNADA:",
    texto: "30.000 COP",
  },
  {
    id: 6,
    titulo: "FECHAS DE CORTE:",
    texto: "(5) y (20) de cada mes",
  },
  {
    id: 7,
    titulo: "AUXILIO TRANSPORTE POR JORNADA:",
    texto: "4.687 COP",
  },
];

function ProfitsScreen({ navigation }) {
  const { user } = useAuth();
  const dataChart = 565.618;
  const textChart = dataChart + "COP";
  return (
    <>
      <BackTitledHeader title="Mis ganancias" />
      <ScrollView style={{ marginHorizontal: 0 }}>
        <SafeAreaView style={styles.container}>
          <View>
            <View style={styles.containerHorizontal}>
              <View style={{ width: "57%" }}>
                <Text style={styles.titleStyle}>{user.full_name}</Text>
                <Text style={styles.textSubtitle}>{user.position}</Text>
                <View>
                  <View style={styles.containerHorizontal}>
                    <View
                      style={[
                        styles.containerHorizontal,
                        styles.containerTextIcon,
                      ]}
                    >
                      <Image
                        style={{ width: 16, height: 16, marginRight: 10 }}
                        source={IconPlanet}
                      />
                      <Text style={styles.textIcon}>{user.country}</Text>
                    </View>
                    <View
                      style={[
                        styles.containerHorizontal,
                        styles.containerTextIcon,
                      ]}
                    >
                      <Image
                        style={{ width: 16, height: 16, marginRight: 10 }}
                        source={IconCard}
                      />
                      <Text style={styles.textIcon}>
                        ID: {user.document_id}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.containerText}>
                    <Text style={styles.textStyle}>
                      Este es un estimado de tus ganancias brutas (luego del
                      pago de aportaciones sociales y de ley). Recuerda que
                      estas pueden variar según diversas eventualidades
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: "43%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: 120,
                    height: 120,
                  }}
                  source={user.image_url}
                />
              </View>
            </View>
            <View style={styles.divider}>
              <Image
                style={{ width: 350, height: 3 }}
                source={RectangleDivider}
              />
            </View>
            <View>
              <View style={styles.title}>
                <Text
                  style={[
                    styles.titleStyle,
                    { marginBottom: 20, marginRight: 20 },
                  ]}
                >
                  Registro
                </Text>
              </View>
              <View>
                {dataList.map((item, index) => (
                  <View key={index} style={styles.containerHorizontal}>
                    <View
                      style={{
                        width: 16,
                        height: 16,
                      }}
                    ></View>
                    <Text style={styles.textList}>{item.titulo}</Text>
                    <Text>{item.texto}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.divider}>
              <Image
                style={{ width: 350, height: 3 }}
                source={RectangleDivider}
              />
            </View>
            <View
              style={{
                flex: 3,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                style={[styles.titleStyle, { marginBottom: 20, marginTop: 20 }]}
              >
                Ganancias Estimadas
              </Text>
              <View
                style={{
                  flex: 2,
                  alignItems: "center",
                }}
              >
                <Speedometer
                  value={100}
                  totalValue={150}
                  size={320}
                  outerColor={Colors.colorTitle}
                  internalColor={Colors.blue}
                  showText
                  text={textChart}
                  showPercent
                  valueSuffix={"X"}
                  textStyle={{
                    color: Colors.blue,
                    fontSize: 30,
                    fontWeight: "600",
                    lineHeight: 22,
                  }}
                  labelStyle={{ color: "blue" }}
                  labelFormatter={(number) => `${number}%`}
                  percentStyle={{ color: Colors.blue }}
                />
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    marginTop: 15,
                  }}
                >
                  <Text style={styles.textEarnings}>
                    {"40.000 COP"} x Jornada Completa
                  </Text>
                  <Text style={styles.textEarnings}>
                    {"30.000 COP"} x Media Jornada
                  </Text>
                  <Text style={styles.textEarnings}>
                    {"4.687 COP"} x Auxilio de Transporte
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flex: 2,
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: 25,
                  marginBottom: 25,
                }}
              >
                <View
                  style={{
                    flex: 3,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 120,
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Stars
                      display={4}
                      spacing={10}
                      count={5}
                      starSize={20}
                      fullStar={Star}
                      emptyStar={EmptyStar}
                    />
                    <Text style={styles.textStart}>4/5 Reseñas</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Progress.Bar progress={0.3} width={80} />
                    <Text style={styles.progressText}>64/100 J. Completas</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Progress.Bar progress={0.3} width={80} />
                    <Text style={styles.progressText}>
                      48/100 Medias Jornada
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 3,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 100,
                  }}
                >
                  <View>
                    <CircularProgress
                      value={60}
                      progressValueColor={Colors.blue}
                      inActiveStrokeColor={"#2ecc71"}
                      inActiveStrokeOpacity={0.2}
                      activeStrokeWidth={40}
                    />
                    <Text style={styles.progressText}>Jornadas Completas</Text>
                  </View>
                  <View>
                    <CircularProgress
                      value={60}
                      progressValueColor={Colors.blue}
                      inActiveStrokeColor={"#2ecc71"}
                      inActiveStrokeOpacity={0.2}
                      activeStrokeWidth={40}
                    />
                    <Text style={styles.progressText}>Medias Jornadas</Text>
                  </View>
                  <View>
                    <CircularProgress
                      value={60}
                      progressValueColor={Colors.blue}
                      inActiveStrokeColor={"#2ecc71"}
                      inActiveStrokeOpacity={0.2}
                      activeStrokeWidth={40}
                    />
                    <Text style={styles.progressText}>
                      Auxilios de Transporte
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

export default ProfitsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  containerHorizontal: {
    flex: 2,
    flexDirection: "row",
  },
  containerTextIcon: {
    flex: 1,
  },
  containerText: {
    width: "100%",
  },
  textIcon: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 11,
    lineHeight: 19,
  },
  titleStyle: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 22,
    color: Colors.blue,
  },
  textSubtitle: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 11,
    lineHeight: 19,
    color: Colors.colorUserName,
  },
  textStyle: {
    fontWeight: "300",
    fontSize: 11,
    lineHeight: 17,
  },
  title: {
    width: 192,
    textAlign: "center",
  },
  imgUser: {
    width: 120,
    height: 120,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textList: {
    marginLeft: 8,
    marginRight: 8,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 11,
    lineHeight: 19,
  },
  divider: {
    flex: 1,
    alignItems: "center",
  },
  textEarnings: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 11,
    lineHeight: 22,
    color: Colors.black,
  },
  textStart: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 22,
    color: Colors.blue,
  },
  progressText: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 10,
    lineHeight: 22,
    color: Colors.black,
    textAlign: "center",
  },
});

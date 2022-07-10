import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
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
import EmptyStar from "../../assets/earnings/SingleStar.png";
import Star from '../../assets/earnings/Star.png';
import Stars from "react-native-stars";
import CircularProgress from "react-native-circular-progress-indicator";
import { showOrderEmployee } from "../../services/order-details-services";
import { showReviews } from "../../services/reviews-service";
import { useAuth } from "../../context/auth-context";
import NumberFormat from 'react-number-format';

function ProfitsScreen() {
  const { user } = useAuth();
  React.useEffect(() => {
    showOrderEmployee(user.id).then(setOrders);
    showReviews(user.id).then(setReviews);
  },[user]);
 
  const [orders, setOrders] = React.useState(null);
  const [star, setStar] = React.useState(null);
  const [reviews, setReviews] = React.useState(null);

  const date = new Date();
  const periodoMin = date.getMonth() + "/" + date.getFullYear();
  const periodoMax = date.getMonth() + 1 + "/" + date.getFullYear();

  let completas = [];
  let Ganancias = 0;
  let Medias = [];
  let Hora = 0;
  let totalCompletas = 0;
  let totalMedias = 0;
  let totalHoras = 0;
  if (orders) {
    orders.forEach((order) => {
      if (order.workday === "Completa") {
        completas.push(order);
        Ganancias += 44687;
      }
      if (order.workday === "Hora") {
        if (order.hours !== "") Hora += parseInt(order.hours);
        Ganancias += 7.82;
      }
      if (order.workday === "Media") {
        Medias.push(order);
        Ganancias += 34687;
      }
    });

    if (completas.length < 5) {
      totalCompletas = 5;
    }
    if (completas.length < 10 && completas.length >= 5) {
      totalCompletas = 10;
    }
    if (completas.length < 20 && completas.length >= 10) {
      totalCompletas = 20;
    }
    if (completas.length < 50 && completas.length >= 20) {
      totalCompletas = 50;
    }
    if (completas.length < 100 && completas.length >= 50) {
      totalCompletas = 100;
    }
    if (completas.length < 200 && completas.length >= 100) {
      totalCompletas = 200;
    }
    if (completas.length < 500 && completas.length >= 200) {
      totalCompletas = 500;
    }
    if (completas.length < 1000 && completas.length >= 500) {
      totalCompletas = 1000;
    }
    if (completas.length < 2000 && completas.length >= 1000) {
      totalCompletas = 2000;
    }


    if (Medias.length < 5) {
      totalMedias = 5;
    }
    if (Medias.length < 10 && Medias.length >= 5) {
      totalMedias = 10;
    }
    if (Medias.length < 20 && Medias.length >= 10) {
      totalMedias = 20;
    }
    if (Medias.length < 50 && Medias.length >= 20) {
      totalMedias = 50;
    }
    if (Medias.length < 100 && Medias.length >= 50) {
      totalMedias = 100;
    }
    if (Medias.length < 200 && Medias.length >= 100) {
      totalMedias = 200;
    }
    if (Medias.length < 500 && Medias.length >= 200) {
      totalMedias = 500;
    }
    if (Medias.length < 1000 && Medias.length >= 500) {
      totalMedias = 1000;
    }
    if (Medias.length < 2000 && Medias.length >= 1000) {
      totalMedias = 2000;
    }


    if (Hora.length < 50) {
      totalHoras = 50;
    }
    if (Hora.length < 100 && Hora.length >= 50) {
      totalHoras = 100;
    }
    if (Hora.length < 200 && Hora.length >= 100) {
      totalHoras = 200;
    }
    if (Hora.length < 500 && Hora.length >= 200) {
      totalHoras = 500;
    }
    if (Hora.length < 1000 && Hora.length >= 500) {
      totalHoras = 1000;
    }
    if (Hora.length < 2000 && Hora.length >= 1000) {
      totalHoras = 2000;
    }
    if (Hora.length < 5000 && Hora.length >= 2000) {
      totalHoras = 5000;
    }
    if (Hora.length < 10000 && Hora.length >= 5000) {
      totalHoras = 10000;
    }
    if (Hora.length < 20000 && Hora.length >= 10000) {
      totalHoras = 20000;
    }
    
  }

  let score = 0;
  if (reviews) {
    console.log(score)
    if(reviews.length > 0) {
       reviews.forEach((review) => {
      score += review.score;
    });
    }

    if(reviews.length > 0) {
    score = parseInt(score / reviews.length);
    if (!star) {
      setStar(score);
      
    }}
    if(reviews.length === 0) {
      if (!star) {
        setStar(0);
      }}
    }

  return (
    <>
      <BackTitledHeader title="Mis ganancias" />
      <ScrollView style={{ marginHorizontal: 0 }}>
        <SafeAreaView style={styles.container}>
        {
          user ? (
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
                      <IconPlanet
                        style={{ width: 16, height: 16, marginRight: 10 }}
                      />
                      <Text style={styles.textIcon}>{user.country}</Text>
                    </View>
                    <View
                      style={[
                        styles.containerHorizontal,
                        styles.containerTextIcon,
                      ]}
                    >
                      <IconCard
                        style={{ width: 16, height: 16, marginRight: 10 }}
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
                    borderRadius: 90,
                  }}
                  source={{uri: user.image_url}}
                />
              </View>
            </View>
            <View style={styles.divider}>
              <RectangleDivider
                
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
                {orders ? (
                  orders.length > 0 ? (
                    <>
                    <View style={styles.containerHorizontal}>
                      <View
                        style={{
                          width: 16,
                          height: 16,
                        }}
                      />
                      <Text style={styles.textList}>PERIODO: </Text>
                      <Text>
                        {"21/" +
                          periodoMin.toString() +
                          " - 05/" +
                          periodoMax.toString()}
                      </Text>
                    </View>

                    <View style={styles.containerHorizontal}>
                      <View
                        style={{
                          width: 16,
                          height: 16,
                        }}
                      />
                      <Text style={styles.textList}>FECHA DE CORTE: </Text>
                      <Text>(5) y (20) de cada mes</Text>
                    </View>
                    
                      {user.country == "Colombia" ? (
                        <>
                          <View style={styles.containerHorizontal}>
                            <View
                              style={{
                                width: 16,
                                height: 16,
                              }}
                            />
                            <Text style={styles.textList}>
                              JORNADAS COMPLETAS:
                            </Text>
                            <Text>{completas.length + " Jornadas"}</Text>
                          </View>

                          <View style={styles.containerHorizontal}>
                            <View
                              style={{
                                width: 16,
                                height: 16,
                              }}
                            />
                            <Text style={styles.textList}>
                              MEDIAS JORNADAS:
                            </Text>
                            <Text>{Medias.length + " Medias Jornadas"}</Text>
                          </View>

                          <View style={styles.containerHorizontal}>
                            <View
                              style={{
                                width: 16,
                                height: 16,
                              }}
                            />
                            <Text style={styles.textList}>
                              GANANCIA BRUTA JORNADA COMPLETA:
                            </Text>
                            <Text>40.000 COP</Text>
                          </View>

                          <View style={styles.containerHorizontal}>
                            <View
                              style={{
                                width: 16,
                                height: 16,
                              }}
                            />
                            <Text style={styles.textList}>
                              GANANCIA BRUTA MEDIA JORNADA:{" "}
                            </Text>
                            <Text>30.000 COP</Text>
                          </View>

                          <View style={styles.containerHorizontal}>
                            <View
                              style={{
                                width: 16,
                                height: 16,
                              }}
                            />
                            <Text style={styles.textList}>
                              AUXILIO TRANSPORTE POR JORNADA:{" "}
                            </Text>
                            <Text>4.687 COP</Text>
                          </View>
                        </>
                      ) : (
                        <>
                          <View style={styles.containerHorizontal}>
                            <View
                              style={{
                                width: 16,
                                height: 16,
                              }}
                            />
                            <Text style={styles.textList}>
                              HORAS LABORADAS:{" "}
                            </Text>
                            <Text>{Hora + " Horas"}</Text>
                          </View>
                          <View style={styles.containerHorizontal}>
                            <View
                              style={{
                                width: 16,
                                height: 16,
                              }}
                            />
                            <Text style={styles.textList}>
                            GANANCIA BRUTA POR HORA:{" "}
                            </Text>
                            <Text>7.82 €</Text>
                          </View>
                        </>
                      )}
                  </>
                  ) : null
                 
                ) : (
                  <Text>Aún no tienes jornadas</Text>
                )}
              </View>
            </View>
            <View style={styles.divider}>
              <RectangleDivider
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
                {user ? (
                  user.country == "Colombia" ? (
                    <>
                    <NumberFormat
                      value={Ganancias}
                      displayType="text"
                      thousandSeparator
                      renderText={(value) => <Text style={[
                          styles.titleStyle,
                          { marginBottom: 20, marginTop: 20 },
                        ]}>{value + " COP"}</Text>}
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
                    </>
                  ) : (
                    <>
                    <NumberFormat
                      value={Ganancias}
                      displayType="text"
                      thousandSeparator
                      renderText={(value) => <Text style={[
                          styles.titleStyle,
                          { marginBottom: 20, marginTop: 20 },
                        ]}>{value + " €"}</Text>}
                    />
                      <View
                        style={{
                          flex: 1,
                          alignItems: "center",
                          marginTop: 15,
                        }}
                      >
                        <Text style={styles.textEarnings}>
                        Estimado a 7.82 € x hora laborada.
                        </Text>
                      </View>
                    </>
                  )
                ) : null}
              </View>
              {user ? (
                user.country === "Colombia" ? (
                  <>
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
                          marginTop: 40,
                        }}
                      >
                        <View style={{ alignItems: "center" }}>
                          {star ? (
                            <Stars
                              display={3}
                              spacing={10}
                              count={5}
                              starSize={20}
                              fullStar={Star}
                              emptyStar={EmptyStar}
                            />
                          ) : null}
                            {
                              reviews ? (
                                 <Text style={styles.textStart}>
                            {reviews.length + " Reseñas"}
                          </Text>
                              ) : null
                            }
                         
                        </View>            
                      </View>
                      <View
                        style={{
                          flex: 3,
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 100,
                          marginBottom: 10,
                        }}
                      >
                        <View style={{ marginRight: 10,}}>
                          <CircularProgress
                            value={completas.length}
                            maxValue={totalCompletas}
                            activeStrokeColor={"#0BBBEF"}
                            inActiveStrokeColor={"#000"}
                            inActiveStrokeOpacity={0.5}
                            inActiveStrokeWidth={20}
                            activeStrokeWidth={20}
                          />
                          <Text style={styles.progressText}>
                            Jornadas Completas
                          </Text>
                        </View>
                        <View style={{ marginLeft: 10,}}>
                        <CircularProgress
                            value={Medias.length}
                            maxValue={totalMedias}
                            activeStrokeColor={"#0BBBEF"}
                            inActiveStrokeColor={"#000"}
                            inActiveStrokeOpacity={0.5}
                            inActiveStrokeWidth={20}
                            activeStrokeWidth={20}
                          />
                          <Text style={styles.progressText}>
                            Medias Jornadas
                          </Text>
                        </View>
                      </View>
                    </View>
                  </>
                ) : (
                  <>
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
                          marginTop: 40,
                        }}
                      >
                        <View style={{ alignItems: "center" }}>
                          {star ? (
                            <Stars
                              display={star}
                              spacing={10}
                              count={5}
                              starSize={20}
                              fullStar={Star}
                              emptyStar={EmptyStar}
                            />
                          ) : null}
                            {
                              reviews ? (
                                 <Text style={styles.textStart}>
                            {reviews.length + " Reseñas"}
                          </Text>
                              ) : null
                            }
                         
                        </View>            
                      </View>
                      <View
                        style={{
                          flex: 3,
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 100,
                          marginBottom: 10,
                        }}
                      >
                        <View style={{ marginRight: 10,}}>
                          <CircularProgress
                            value={Hora}
                            maxValue={totalHoras}
                            activeStrokeColor={"#0BBBEF"}
                            inActiveStrokeColor={"#000"}
                            inActiveStrokeOpacity={0.5}
                            inActiveStrokeWidth={20}
                            activeStrokeWidth={20}
                          />
                          <Text style={styles.progressText}>
                            HORAS
                          </Text>
                        </View>
                      </View>
                    </View>
                  </>
                )
              ) : null}
            </View>
          </View>
          ) : <Text style={styles.textSubtitle}>assa</Text>
        }
          
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

export default ProfitsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
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
    fontWeight: "600",
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
    marginTop: 15,
    marginBottom: 15,
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

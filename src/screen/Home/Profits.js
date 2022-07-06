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
import { showOrderEmployee } from "../../services/order-details-services";
import { showReviews } from "../../services/reviews-service";
import faStar from "../../assets/Reviews/faStar.svg";

function ProfitsScreen() {
  const { user } = useAuth();
  const [orders, setOrders] = React.useState(null);
  const [star, setStar] = React.useState(null);
  const [reviews, setReviews] = React.useState(null);

  const date = new Date()
  const periodoMin = date.getMonth()+"/"+date.getFullYear()
  const periodoMax = date.getMonth()+1+"/"+date.getFullYear()

  React.useEffect(() => {
    showOrderEmployee(user.id).then(setOrders)
    showReviews(user.id).then(setReviews)
  }, [user])

  let completas = []
  let Ganancias = 0
  let Medias = []
  let Hora = 0
  let totalCompletas= 0
  let totalMedias= 0
  if(orders){
    orders.forEach((order)=>{
      if(order.workday === 'Completa'){
        completas.push(order)
        Ganancias += 44687
      }
      if(order.workday === 'Hora'){
        if(order.hours !== "")
        Hora += parseInt(order.hours)
        Ganancias += 7.82
      }
      if(order.workday === 'Media'){
        Medias.push(order)
        Ganancias += 34687
      }
    })
    
    if(completas.length < 5){
      totalCompletas = 5;
    }
    if(completas.length < 10 && completas.length >= 5){
      totalCompletas = 10;
    }
    if(completas.length < 15 && completas.length >= 10){
      totalCompletas = 15;
    }
    if(completas.length < 20 && completas.length >= 15){
      totalCompletas = 20;
    }
    if(completas.length < 25 && completas.length >= 20){
      totalCompletas = 25;
    }
    if(completas.length < 30 && completas.length >= 25){
      totalCompletas = 30;
    }
    if(completas.length < 35 && completas.length >= 30){
      totalCompletas = 35;
    }
    if(completas.length < 40 && completas.length >= 35){
      totalCompletas = 40;
    }
    if(completas.length < 45 && completas.length >= 40){
      totalCompletas = 45;
    }
    if(completas.length < 50 && completas.length >= 45){
      totalCompletas = 50;
    }
    if(completas.length < 55 && completas.length >= 50){
      totalCompletas = 55;
    }
    if(completas.length < 60 && completas.length >= 55){
      totalCompletas = 60;
    }
    if(completas.length < 65 && completas.length >= 60){
      totalCompletas = 65;
    }
    if(completas.length < 70 && completas.length >= 65){
      totalCompletas = 70;
    }
    if(completas.length < 75 && completas.length >= 70){
      totalCompletas = 75;
    }
    if(completas.length < 80 && completas.length >= 75){
      totalCompletas = 80;
    }
    if(completas.length < 85 && completas.length >= 80){
      totalCompletas = 85;
    }
    if(completas.length < 90 && completas.length >= 85){
      totalCompletas = 90;
    }
    if(completas.length < 95 && completas.length >= 90){
      totalCompletas = 95;
    }
    if(completas.length < 100 && completas.length >= 95){
      totalCompletas = 100;
    }

    if(Medias.length < 5){
      totalMedias = 5;
    }
    if(Medias.length < 10 && Medias.length >= 5){
      totalMedias = 10;
    }
    if(Medias.length < 15 && Medias.length >= 10){
      totalMedias = 15;
    }
    if(Medias.length < 20 && Medias.length >= 15){
      totalMedias = 20;
    }
    if(Medias.length < 25 && Medias.length >= 20){
      totalMedias = 25;
    }
    if(Medias.length < 30 && Medias.length >= 25){
      totalMedias = 30;
    }
    if(Medias.length < 35 && Medias.length >= 30){
      totalMedias = 35;
    }
    if(Medias.length < 40 && Medias.length >= 35){
      totalMedias = 40;
    }
    if(Medias.length < 45 && Medias.length >= 40){
      totalMedias = 45;
    }
    if(Medias.length < 50 && Medias.length >= 45){
      totalMedias = 50;
    }
    if(Medias.length < 55 && Medias.length >= 50){
      totalMedias = 55;
    }
    if(Medias.length < 60 && Medias.length >= 55){
      totalMedias = 60;
    }
    if(Medias.length < 65 && Medias.length >= 60){
      totalMedias = 65;
    }
    if(Medias.length < 70 && Medias.length >= 65){
      totalMedias = 70;
    }
    if(Medias.length < 75 && Medias.length >= 70){
      totalMedias = 75;
    }
    if(Medias.length < 80 && Medias.length >= 75){
      totalMedias = 80;
    }
    if(Medias.length < 85 && Medias.length >= 80){
      totalMedias = 85;
    }
    if(Medias.length < 90 && Medias.length >= 85){
      totalMedias = 90;
    }
    if(Medias.length < 95 && Medias.length >= 90){
      totalMedias = 95;
    }
    if(Medias.length < 100 && Medias.length >= 95){
      totalMedias = 100;
    }
    
  }

  let score=0
  if(reviews){
    reviews.forEach((review)=>{
      score += review.score;
    })
    
    score = parseInt(score/reviews.length);
    if(!star){
      setStar(score)
    }
  }
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
              {
                orders ? (
                  <>
                  <View  style={styles.containerHorizontal}>
                    <View 
                        style={{
                          width: 16,
                          height: 16,
                        }}
                      />
                    <Text style={styles.textList}>PERIODO: </Text>
                    <Text>{"21/"+periodoMin.toString()+ " - 05/"+periodoMax.toString()}</Text>
                  </View>

                  <View  style={styles.containerHorizontal}>
                    <View 
                        style={{
                          width: 16,
                          height: 16,
                        }}
                      />
                    <Text style={styles.textList}>FECHA DE CORTE: </Text>
                    <Text>(5) y (20) de cada mes</Text>
                  </View>
                  {
                    user ? (
                      user.country == "Colombia" ? (
                        <>
                        <View  style={styles.containerHorizontal}>
                    <View 
                      style={{
                        width: 16,
                        height: 16,
                    }}/>
                    <Text style={styles.textList}>JORNADAS COMPLETAS:</Text>
                    <Text>{completas.length + " Jornadas"}</Text>
                  </View>

                  <View  style={styles.containerHorizontal}>
                    <View 
                      style={{
                        width: 16,
                        height: 16,
                    }}/>
                    <Text style={styles.textList}>MEDIAS JORNADAS:</Text>
                    <Text>{Medias.length + " Medias Jornadas"}</Text>
                  </View>

                  <View  style={styles.containerHorizontal}>
                    <View 
                      style={{
                        width: 16,
                        height: 16,
                    }}/>
                    <Text style={styles.textList}>GANANCIA BRUTA JORNADA COMPLETA:</Text>
                    <Text>40.000 COP</Text>
                  </View>

                  <View  style={styles.containerHorizontal}>
                    <View 
                      style={{
                        width: 16,
                        height: 16,
                    }}/>
                    <Text style={styles.textList}>GANANCIA BRUTA MEDIA JORNADA: </Text>
                    <Text>30.000 COP</Text>
                  </View>

                  <View  style={styles.containerHorizontal}>
                    <View 
                      style={{
                        width: 16,
                        height: 16,
                    }}/>
                    <Text style={styles.textList}>AUXILIO TRANSPORTE POR JORNADA: </Text>
                    <Text>4.687 COP</Text>
                  </View>
                        </>
                      ) : (
                        <>
                        <View  style={styles.containerHorizontal}>
                    <View 
                      style={{
                        width: 16,
                        height: 16,
                    }}/>
                    <Text style={styles.textList}>HORAS LABORADAS: </Text>
                    <Text>{Hora + " Horas"}</Text>
                  </View>

                        </>
                      )
                    ) : null
                  }
                 

                </>)
                  
                : (<Text>Aún no tienes jornadas</Text>)
              }
                
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
               <Text
                style={[styles.titleStyle, { marginBottom: 20, marginTop: 20 }]}
              >
                {Ganancias + " COP"}
              </Text>
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
                  {
                    star ? (
                      <Stars
                      display={star}
                      spacing={10}
                      count={5}
                      starSize={20}
                      fullStar={Star}
                      emptyStar={EmptyStar}
                    />
                    ) :null
                  }

                    <Text style={styles.textStart}>{score+"/5 Reseñas"}</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Progress.Bar progress={completas.length/10} width={80} />
                    <Text style={styles.progressText}>{completas.length+"/"+totalCompletas+ " +J. Completas"}</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Progress.Bar progress={Medias.length/10} width={80} />
                    <Text style={styles.progressText}>
                      {Medias.length+"/"+totalMedias +"Medias Jornada"}
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
                      maxValue={200}
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

import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ListItem } from "@rneui/themed";
import Stars from "react-native-stars";
import { showReviews } from "../../services/reviews-service";
import BackTitledHeader from "../../components/BackTitleHeader";
import Colors from "../../assets/colors/colors";

import { useAuth } from "../../context/auth-context";
import StarSkillTwo from "../../assets/earnings/SingleStar.png";
import StarSkill from '../../assets/earnings/Star.png';
import axios, { post } from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URI } from "../../../config";

function ReviewsScreen({ navigation }) {
  const { user } = useAuth();
 
  React.useEffect(() => {
    showReviews(user.id).then(setReviews);
  },[]);
  const [reviews, setReviews] = React.useState(null);

  /* const paintStar = (cantidad) => {
    let starts = [];
    for (let i = 0; i < cantidad; i++) {
      starts.push(<Image key={i} source={faStar} style={{width: 40, height: 40, color: "#FFC107"}}  />);
    }
    return starts;
  }; */

  // Styles component UI Button
  const btnStyle = {
    height: 25,
    width: 75,
    paddingHorzontal: 10,
    paddingVertical: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EC607E",
    borderRadius: 15,
    
  };

  async function handleReport(customer){
    console.log(customer)
    const type = "Empleado";
    const formData = new FormData();
    const text = "Estoy inconforme con está calificación de mi servicio."

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
      createTwoButtonAlert()
    });
  }

  const createTwoButtonAlert = () =>
  Alert.alert(
    "¡Reporte enviado!",
    "Se ha abierto un reporte para investigar la razón de esta puntuación, ¡tendrás novedades pronto!",
    [
      { text: "OK", onPress: () => navigation.goBack() }
    ]
  );


  const keyExtractor = (index) => index.toString();
  const renderItem = ({ item }) => (
    <ListItem key={item} bottomDivider containerStyle={styles.listStyle}>
      <View key={item.id} style={styles.list}>
        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{uri: user.image_url}} />
        <View style={styles.containerTextList}>
          <Text style={styles.textList}>{item.full_name}</Text>
          <Text style={styles.textDescription}>{item.body}</Text>
        </View>
        <View
          style={{
            marginHorizontal: 5,
            marginTop: 45,
            alignItems: "center",
          }}
        >
          <Stars
            display={item.score}
            spacing={8}
            count={5}
            starSize={15}
            fullStar={StarSkill}
            emptyStar={StarSkillTwo}
          />
          <TouchableOpacity
            style={btnStyle}
            onPress={() => handleReport(item.customer_id)}
          >
            <Text style={styles.textButton}>Reportar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ListItem>
  );
  return (
    <>
      <BackTitledHeader title="Mis reseñas" />
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View
            style={{
              marginLeft: 25,
            }}
          >
          {
            reviews ? (
              <Text style={styles.title}>Reseñas({reviews.length})</Text>
            ) : null
          }
            
          </View>
        </View>
        <View style={styles.stylesFlatList}>
          {reviews ? (
            reviews.length > 0 ? (
              <FlatList
              keyExtractor={keyExtractor}
              data={reviews}
              renderItem={renderItem}
            />
            ) : <Text>No tienes reseñas aún</Text>
            
          ) : (
            <Text>No tienes reseñas aún</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
}

export default ReviewsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundMain,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 26,
    color: "#3D4451",
    marginBottom: 20,
    marginTop: 20,
  },
  list: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  listStyle: { width: 367, backgroundColor: Colors.backgroundMain },
  stylesFlatList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTextList: {
    width: "50%",
    paddingLeft: 14,
  },
  textList: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 26,
    color: "#00000",
  },
  textDescription: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 11,
    lineHeight: 22,
    color: "#82868D",
  },
  textButton: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 11,
    color: "#ffff",

  },
  containerButton: {
    flex: 1,
    alignItems: "center",
  },
});

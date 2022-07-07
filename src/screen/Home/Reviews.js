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
} from "react-native";
import { ListItem } from "@rneui/themed";
import Stars from "react-native-stars";
import { showReviews } from "../../services/reviews-service";
import BackTitledHeader from "../../components/BackTitleHeader";
import faStar from "../../assets/Reviews/faStar.svg";
import Colors from "../../assets/colors/colors";
import StarSkill from "../../assets/stars/review.png";
import StarSkillTwo from "../../assets/stars/reviewTwo.png";
import { AuthContext } from "../../context/auth-context";

function ReviewsScreen({ navigation }) {
  const [user, setUser] = React.useState(null);
  const auth = React.useContext(AuthContext);
  React.useEffect(() => {
    setUser(auth.getState().user.data)
  },[]);
  const [reviews, setReviews] = React.useState(null);

  /* const paintStar = (cantidad) => {
    let starts = [];
    for (let i = 0; i < cantidad; i++) {
      starts.push(<Image key={i} source={faStar} style={{width: 40, height: 40, color: "#FFC107"}}  />);
    }
    return starts;
  }; */
  React.useEffect(() => {
    showReviews(user.id).then(setReviews);
  }, [user.id]);

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

  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
    <ListItem key={item} bottomDivider containerStyle={styles.listStyle}>
      <View key={item.id} style={styles.list}>
        <Image style={{ width: 40, height: 40 }} source={user.image_url} />
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
            onPress={() => navigation.navigate("Report")}
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
            <Text style={styles.title}>Reseñas(5)</Text>
          </View>
        </View>
        <View style={styles.stylesFlatList}>
          {reviews ? (
            <FlatList
              keyExtractor={keyExtractor}
              data={reviews}
              renderItem={renderItem}
            />
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
    lineHeight: 19,
    color: "#ffff",
  },
  containerButton: {
    flex: 1,
    alignItems: "center",
  },
});

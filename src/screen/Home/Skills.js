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
import BackTitledHeader from "../../components/BackTitleHeader";
import { showHEmployee } from "../../services/hability-employee-services";
import Stars from "react-native-stars";
import StarSkill from "../../assets/skills/StarSkill.png";
import StarSkillTwo from "../../assets/skills/StarSkillTwo.png";
import colors from "../../assets/colors/colors";
import * as Linking from "expo-linking";
import { AuthContext } from "../../context/auth-context";

function SkillsScreen({ navigation }) {

  const auth = React.useContext(AuthContext);
 
  const [skills, setSkills] = React.useState(null);

  React.useEffect(() => {
    showHEmployee(auth.getState().user.data).then(setSkills);
  }, []);

  const URL_ROUTE = () => {
    Linking.openURL("https://www.google.com/");
  };

  const keyExtractor = (index) => index.toString();
  const renderItem = ({ item }) => (
    <View style={styles.containerListItem}>
      <ListItem key={item} bottomDivider containerStyle={styles.listStyle}>
        <View key={item.id} style={styles.list}>
          <Image style={{ width: 37, height: 37 }} source={item.icon} />
          <View style={styles.containerTextList}>
            <Text style={styles.textList}>{item.hability}</Text>
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
          </View>
        </View>
      </ListItem>
    </View>
  );
  const btnStyle = {
    height: 55,
    width: "80%",
    paddingHorzontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
  };
  const btnStyleAdd = {
    height: 30,
    width: 89,
    paddingHorzontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 2,
  };
  return (
    <>
      <BackTitledHeader title="Mis Habilidades" />
      <ScrollView>
        <View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.text}>
              Aprende habilidades nuevas y desloquea nuevas oportuniddes de
              trabajo.
            </Text>
          </View>
          {skills ? (
            <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.title}>
              {skills.length} Habilidades Actuales{" "}
              <View style={{ marginLeft: 50 }}>
                <TouchableOpacity style={btnStyleAdd} onPress={URL_ROUTE}>
                  <Text style={styles.textButtonAdd}>+ Agregar</Text>
                </TouchableOpacity>
              </View>
            </Text>
          </View>
          ): null} 
          
        </View>
        <View style={styles.stylesFlatList}>
          {skills ? (
            <FlatList
              keyExtractor={keyExtractor}
              data={skills}
              renderItem={renderItem}
            />
          ) : (
            <Text>Sin habilidades</Text>
          )}
          <TouchableOpacity
            style={btnStyle}
            onPress={() => navigation.navigate("GoodP")}
          >
            <Text style={styles.textButton}>Buenas practicas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default SkillsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
  },
  containerListItem: {
    margin: "1rem 0",
    padding: "1rem",
  },
  listStyle: {
    backgroundColor: "#ffff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    margin: "1rem 0",
    padding: "1rem",
  },
  text: {
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 19,
    color: "#35435E",
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
  stylesFlatList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTextList: {
    width: "55%",
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
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
  textButtonAdd: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 20,
    color: "#ffff",
  },
  containerButton: {
    flex: 1,
    alignItems: "center",
  },
});

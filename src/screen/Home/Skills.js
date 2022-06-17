import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import { ListItem } from "@rneui/themed";
import BackTitledHeader from "../../components/BackTitleHeader";
import { useAuth } from "../../context/auth-context";
import { showHEmployee } from "../../services/hability-employee-services";
import Stars from "react-native-stars";
import StarSkill from "../../assets/skills/StarSkill.png";
import StarSkillTwo from "../../assets/skills/StarSkillTwo.png";

function SkillsScreen({ navigation }) {
  const { user } = useAuth();
  const [skills, setSkills] = React.useState(null);
  React.useEffect(() => {
    showHEmployee(user.id).then(setSkills);
  }, [user.id]);

  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ListItem key={item} bottomDivider containerStyle={styles.listStyle}>
        <View key={item.id} style={styles.list}>
          <Image style={{ width: 37, height: 37 }} source={item.icon} />
          <View style={styles.containerTextList}>
            <Text style={styles.textList}>{item.hability}</Text>
            <Text style={styles.textDescription}>{item.body}</Text>
          </View>
          <View style={{ width: "40%", marginTop: 20 }}>
            <Stars
              display={item.score}
              spacing={8}
              count={3}
              starSize={15}
              fullStar={StarSkill}
              emptyStar={StarSkillTwo}
            />
          </View>
        </View>
      </ListItem>
    </View>
  );
  return (
    <>
      <BackTitledHeader title="Menú" />
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
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Text style={styles.title}>
              ... Habilidades Actuales <Button title="+ Agregar" />
            </Text>
          </View>
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
  listStyle: {
    backgroundColor: "#ffff",
    width: "90%",
    borderRadius: 10,
  },
  text: {
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 19,
    color: "#35435E;",
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
    width: "60%",
    color: "#82868D",
  },
});

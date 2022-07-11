import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import * as React from "react";
import { ListItem } from "@rneui/themed";
import { showHEmployee } from "../../services/hability-employee-services";
import BackTitledHeader from "../../components/BackTitleHeader";
import Colors from "../../assets/colors/colors";
import { useAuth } from "../../context/auth-context";
import { vw, vh } from "react-native-expo-viewport-units";
import getAge from "get-age"

function MyProfileScreen({ navigation }) {
  const { user } = useAuth();
  React.useEffect(() => {
    showHEmployee(user.id).then(setSkills);
  },[]);
  const [skills, setSkills] = React.useState(null);

  const btnStyle = {
    height: 55,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blue,
    borderRadius: 10,
    marginBottom: 16,
  };
  const btnTwoStyle = {
    height: 30,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blue,
    borderRadius: 8,
    marginBottom: 16,
  };
  const keyExtractor = (index) => index.toString();
  const renderItem = ({ item }) => (
    <ListItem key={item} containerStyle={styles.listStyle}>
      <View key={item.id} style={styles.containerSkills}>
        <Image style={{ width: 27, height: 27, marginTop: 30, }} source={{uri: item.icon}} />
      </View>
    </ListItem>
  );
  let edad= 0;
  if(user){
    edad =  getAge(user.birth_date)

  }
  // return 5 elements of the array
  const firstFive = skills?.slice(0, 9);

  return (
    <ScrollView>
      <BackTitledHeader title="Mi Perfil" />
      <View
        style={{
          flex: 2,
          alignItems: "center",
          backgroundColor: Colors.backgroundMain,
        }}
      >
      {
        user ? (
          <View style={{ width: "90%" }}>
          <View
            style={{
              height: vh(15),
              borderRadius: 6,
              backgroundColor: Colors.white,
              flexDirection: "column",
              paddingLeft: 10,
              justifyContent: "center",
            }}
          >
            <View style={styles.headerContainer}>
              <View style={styles.containerImage}>
                <Image style={styles.tinyLogo} source={{uri: user.image_url}} />
              </View>
              <View>
                <View style={styles.containerUserData}>
                  <Text style={styles.title}>{user.full_name}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.yearText}>
              {user.experience} años de experiencia
            </Text>
          </View>
          <View>
            {skills ? (
              <>
              <View style={styles.stylesFlatList}>
                <FlatList
                  keyExtractor={keyExtractor}
                  data={firstFive}
                  renderItem={renderItem}
                  numColumns={9}
                />

                </View>
                <View style={{ width: "90%", marginTop: 5}}>
              <TouchableOpacity
                style={btnTwoStyle}
                onPress={() => navigation.navigate("Skill")}
              >
                <Text style={styles.textButton}>Ver más</Text>
              </TouchableOpacity>
            </View>
              </>
            ) : (
              <Text>Sin habilidades</Text>
            )}
            
            <View>
              <View >
                <Text style={styles.textTitle}>Mi Biografía</Text>
                <Text style={styles.text}>{user.biografy}</Text>
              </View>
              <View>
              <View style={{marginBottom: 10,}}>
                <Text style={styles.textTitle}>Mis Datos Personales</Text>
                </View>
                <Text style={styles.textTitle}>
                  Nacionalidad{" "}
                  <Text style={[styles.text, { fontWeight: "500" }]}>
                    {user.country}
                  </Text>
                </Text>
                <Text style={styles.textTitle}>
                  Teléfono{" "}
                  <Text style={[styles.text, { fontWeight: "500" }]}>
                    {user.phone}
                  </Text>
                </Text>
                <Text style={styles.textTitle}>
                  Email{" "}
                  <Text style={[styles.text, { fontWeight: "500" }]}>
                    {user.email}
                  </Text>
                </Text>
                <Text style={styles.textTitle}>
                  Edad{" "}
                  <Text style={[styles.text, { fontWeight: "500" }]}>
                    {edad+" Años"}
                  </Text>
                </Text>
                <Text style={styles.textTitle}>
                  {user.document_type+" "} 
                  <Text style={[styles.text, { fontWeight: "500" }]}>
                    {user.document_id}
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.containerButton}>
              <TouchableOpacity
                style={btnStyle}
                onPress={() => navigation.navigate("Review")}
              >
                <Text style={styles.textButton}>Ver Reseñas de Clientes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        ) : null
      }
        
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  containerImage: {
    flex: 1,
    justifyContent: "center",
  },
  tinyLogo: {
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  headerContainer: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: Colors.white,
    marginTop: 0,
  },
  containerUserData: {
    flex: 1,
    justifyContent: "center",
    width: 270,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 32,
    lineHeight: 40,
    color: "#35435E",
  },
  yearText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 40,
    color: Colors.grayFade,
  },
  containerSkills: {
    width: 30,
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: Colors.white,
  },
  textTitle: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 26,
    color: Colors.colorUserName,
    marginBottom: 5,
  },
  text: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    marginTop: 13,
    marginBottom: 13,
    color: Colors.grayFade,
  },
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
  containerButton: {
    alignItems: "center",
    marginTop: 30,
  },
  listStyle: {
    height: 1,
    width: 30,
    marginVertical: 10,
    marginRight: 10,
    backgroundColor: Colors.white,
    
  },
  stylesFlatList: {
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#52006A',
    justifyContent: "center",
  },
});

export default MyProfileScreen;

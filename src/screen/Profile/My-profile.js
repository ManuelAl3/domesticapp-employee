import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as React from "react";
import { useAuth } from "../../context/auth-context";
import { showHEmployee } from "../../services/hability-employee-services";
import BackTitledHeader from "../../components/BackTitleHeader";
import Colors from "../../assets/colors/colors";

function MyProfileScreen({ navigation }) {
  const { user } = useAuth();
  const [skills, setSkills] = React.useState(null);
  React.useEffect(() => {
    showHEmployee(user.id).then(setSkills);
  }, [user.id]);
  return (
    <>
      <BackTitledHeader title="Mi Perfil" />
      <View
        style={{
          flex: 2,
          alignItems: "center",
          backgroundColor: Colors.backgroundMain,
        }}
      >
        <View style={{ width: "90%" }}>
          <View
            style={{
              height: 75,
              borderRadius: 6,
              backgroundColor: Colors.white,
              flex: 2,
              flexDirection: "column",
              paddingLeft: 10,
              justifyContent: "center",
            }}
          >
            <View style={styles.headerContainer}>
              <View style={styles.containerImage}>
                <Image style={styles.tinyLogo} source={user.image_url} />
              </View>
              <View>
                <View style={styles.containerUserData}>
                  <Text style={styles.title}>{user.full_name}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.yearText}>3 Años de Experiencia</Text>
          </View>
          <View>
            {skills ? (
              skills.map((skills) => (
                <View style={styles.containerSkills} key={skills.id}>
                  <Image
                    style={{ width: 27, height: 27 }}
                    source={skills.icon}
                  />
                </View>
              ))
            ) : (
              <Text>Sin habilidades</Text>
            )}
            <View>
              <View>
                <Text style={styles.textTitle}>Mi Biografía</Text>
                <Text style={styles.text}>
                  Liliana es una mujer de 40 años de edad que destaca por su
                  buena dispocición, diligencia, educación y celeridad
                  constante.
                </Text>
              </View>
              <View>
                <Text style={styles.textTitle}>Mis Datos Personales</Text>
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
                <Text style={styles.textTitle}>Edad</Text>
                <Text style={styles.textTitle}>
                  CC{" "}
                  <Text style={[styles.text, { fontWeight: "500" }]}>
                    {user.document_id}
                  </Text>
                </Text>
              </View>
            </View>

            <Button
              title="Ver Reseñas de Clientes"
              buttonStyle={{
                backgroundColor: Colors.blue,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      </View>
    </>
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
  },
  headerContainer: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: Colors.white,
    height: 132,
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
    flex: 1,
    justifyContent: "center",
    borderRadius: 6,
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
});

export default MyProfileScreen;

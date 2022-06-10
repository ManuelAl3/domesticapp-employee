import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as React from "react";
import { useAuth } from "../../context/auth-context";
import { showHEmployee } from "../../services/hability-employee-services";
import BackTitledHeader from "../../components/BackTitleHeader";

function MyProfileScreen({ navigation }) {
  const { user } = useAuth();
  const [ skills, setSkills] = React.useState(null);
  React.useEffect(() => {
    showHEmployee(user.id).then(setSkills);
  }, [user.id])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <BackTitledHeader title="Mi Perfil" />
      <Image 
        style={styles.tinyLogo}
        source={user.image_url}
      />
      <Text>{user.full_name}</Text>
      {
        skills ? (
          skills.map((skills) =>(
            <View key={skills.id}>
              <Text>{skills.hability}</Text>
            </View>
          ))
          ) : (<Text>Sin habilidades</Text>)
      }
      <Text>Mi biogragia</Text>


      <Text>Mis Datos Personales</Text>
      <Text>Nacionalidad {user.country}</Text>
      <Text>Teléfono {user.phone}</Text>
      <Text>Email {user.email}</Text>
      <Text>Edad</Text>
      <Text>CC {user.document_id}</Text>

      <Button title="Ver Reseñas de Clientes" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },});

export default MyProfileScreen;
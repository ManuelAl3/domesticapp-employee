import { StyleSheet, Text, View, Image, Button, ScrollView } from "react-native";
import * as React from "react";
import { useAuth } from "../context/auth-context";
import { showHEmployee } from "../services/hability-employee-services";
import { CategoryLinks } from "../constants/linksPerfil";
import BackTitledHeader from "../components/BackTitleHeader";

function ProfileScreen({ navigation }) {
  const { user } = useAuth();
  const [ skills, setSkills] = React.useState(null);
  React.useEffect(() => {
    showHEmployee(user.id).then(setSkills);
  }, [user.id])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <BackTitledHeader title="Menú" />
    <ScrollView>
      {
        CategoryLinks.map((option)=>(
          <View key={option.icon}>
          <Image 
            style={{width: 100, height: 100}}
            source={option.img}
          />
          <Text onPress={() => navigation.navigate(`${option.ruta}`,{ itemId: option.id})}>{option.nombre}</Text>
          </View>
        ))
      }
      </ScrollView>
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

export default ProfileScreen;
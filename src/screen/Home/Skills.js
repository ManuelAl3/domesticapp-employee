import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
import { useAuth } from "../../context/auth-context";
import { showHEmployee } from "../../services/hability-employee-services";

function SkillsScreen({ navigation }) {
  const { user } = useAuth();
  const [ skills, setSkills] = React.useState(null);
  React.useEffect(() => {
    showHEmployee(user.id).then(setSkills);
  }, [user.id])

  return (
    <>
    <BackTitledHeader title="Menú" />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Aprende habilidades nuevas y desloquea nuevas oportuniddes de trabajo.</Text>
      <Text>... Habilidades Actuales</Text>
      <Button title="+ Agregar"/>
      {
        skills ? (
          skills.map((skills) =>(
            <View key={skills.id}>
              <Image
                style={{width: 50, height: 50}}
                source={skills.icon}
              />
              <Text>{skills.hability}</Text>
              <Text>{skills.body}</Text>
              <Text>{skills.score}</Text>
            </View>
          ))
          ) : (<Text>Sin habilidades</Text>)
      }
    </View>
    </>
  );
}

export default SkillsScreen;
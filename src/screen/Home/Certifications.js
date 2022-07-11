import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import colors from "../../assets/colors/colors";
import { useAuth } from "../../context/auth-context";

const btnStyle = {
  height: 55,
  width: "80%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.blue,
  borderRadius: 10,
  marginBottom: 16,
};

function CertificationScreen({ navigation }) {
  const { user } = useAuth();

  return (
    <SafeAreaView>
      <BackTitledHeader title="Mi Certificado Laboral" />
      <View style={{backgroundColor: "#fff", borderRadius: 20, marginTop: 25, marginHorizontal: 10, paddingHorizontal: 25,}}>
        <View style={{marginVertical: 20}}>

         <Text style={styles.title}>Datos de certificado</Text>
         
           <View
          style={{textAlign: "justify", paddingHorizontal: 25,}}
        >
       
        {
          user ? (
           <>
           
          <Text style={styles.titleText}>
            Nombre: <Text style={{ fontWeight: "300" }}>{user.full_name} </Text>
          </Text>
          <Text style={styles.titleText}>
            Inicio de contrato: <Text style={{ fontWeight: "300" }}>
            <Text style={{ fontWeight: "300" }}>{user.created_at.substr(0, 10)} </Text>
            </Text>
          </Text>
          <Text style={styles.titleText}>
            Puesto: <Text style={{ fontWeight: "300" }}>Empleado</Text>
          </Text>
        
            </>
          ) : null
        }
        </View>
         </View>
        
      </View>
    </SafeAreaView>
  );
}

export default CertificationScreen;

const styles = StyleSheet.create({
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 20,
    color: "#3D4451",
    marginBottom: 10,
    marginTop: 10,
  },
  titleText: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 30,
    color: "#3D4451",
  },
  containerButton: {
    alignItems: "center",
    marginTop: 30,
  },
});

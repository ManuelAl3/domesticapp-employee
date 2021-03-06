import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import colors from "../../assets/colors/colors";
import { AuthContext } from "../../context/auth-context";

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
  const [user, setUser] = React.useState(null);
  const auth = React.useContext(AuthContext);
  React.useEffect(() => {
    setUser(auth.getState().user.data)
  },[]);

  if(user) {
    console.log(user)
  }
  return (
    <SafeAreaView>
      <BackTitledHeader title="Mi Certificado Laboral" />
      <View>
        <View
          style={{
            marginLeft: 25,
          }}
        >
         <Text style={styles.title}>Datos de certificado</Text>
         
        </View>
           <View
          style={{alignItems: "center", justifyContent: "center",}}
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
        
        <View style={styles.containerButton}>
          <TouchableOpacity style={btnStyle}>
            <Text style={styles.textButton}>Descargar mi certificado</Text>
          </TouchableOpacity>
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
    lineHeight: 26,
    color: "#3D4451",
    marginBottom: 20,
    marginTop: 20,
  },
  titleText: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 14,
    color: "#3D4451",
    padding: 10,
    marginTop: 20,
  },
  containerButton: {
    alignItems: "center",
    marginTop: 30,
  },
});

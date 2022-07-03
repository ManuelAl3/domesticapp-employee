import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BackTitledHeader from "../../../components/BackTitleHeader";
import colors from "../../../assets/colors/colors";

function TermsConditions({ navigation }) {
  const btnStyle = {
    height: 55,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
  };
  return (
    <>
      <BackTitledHeader title="Términos y condiciones" />
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <View style={{ width: "80%" }}>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: 14,
                  lineHeight: 26,
                  color: "#000000",
                }}
              >
                1 - CONDICIONES GENERALES DE USO{" "}
              </Text>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: 14,
                  lineHeight: 22,
                  color: "#000000",
                }}
              >
                El presente documento tiene por objeto establecer las
                Condiciones Generales de Uso de las aplicaciones móviles y el
                servicio web a titularidad de DOMESTICAPP S.A.S. (en adelante
                DOMESTICAPP) con domicilio social en Medellín Colombia,
                dirección Calle 9 sur #79C-151 e inscrito en la Cámara de
                Comercio de Medellín. DOMESTICAPP se reserva el derecho a
                modificar las presentes Condiciones de Uso con el objeto de
                adecuarlas a la legislación vigente aplicable en cada momento.
                Las presentes Condiciones de Uso no excluyen la posibilidad de
                que determinados Servicios de las aplicaciones, por sus
                características particulares, sean sometidos, además de a las
                Condiciones Generales de Uso, a sus propias condiciones
                particulares de uso (en adelante las Condiciones Particulares).
                La Empresa podrá, en cualquier momento y sin necesidad de previo
                aviso, realizar cambios y actualizaciones de las presentes
                Condiciones de Uso y de la Política de Privacidad...
              </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 30 }}>
              <TouchableOpacity style={btnStyle}>
                <Text style={styles.textButton}>Descargar documento</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default TermsConditions;

const styles = StyleSheet.create({
  textButton: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 26,
    color: "#ffff",
  },
});

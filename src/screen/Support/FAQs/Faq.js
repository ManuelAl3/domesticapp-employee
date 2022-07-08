import { Text, View, StyleSheet, ScrollView } from "react-native";
import * as React from "react";
import { CategoriasPreguntas } from "../../../constants/preguntasF";
import BackTitledHeader from "../../../components/BackTitleHeader";

function FaqScreen({ route, navigation }) {
  const { itemId } = route.params;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      //fontFamily: "Poppins",

      
    },
    questionContainer: {
      width: "90%",
      marginTop: 1,
      marginBottom: 1,
    },
    containerPr: {
      marginTop: 1,
      marginBottom: 1,
      padding: 10,
    },
    Ptitle: {
      justifyContent: "center",
      
      fontSize: 14,
      fontWeight: "bold",
      backgroundColor: "#fff",
      padding: 15,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      borderRadius: 15,
    },
    Ptext: {
      textAlign: "justify",
      fontSize: 14,
      letterSpacing: 1,
      padding: 15,
      backgroundColor: "#fff",
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      borderRadius: 15,
    },
    Legend: {
      justifyContent: "center",
      textAlign: "center",
      fontSize: 14,
      fontWeight: "bold",
      color: "#0bbbef",
      marginTop: 15,
      marginBottom: 1,
    },
  });

  return (
    <>
      {CategoriasPreguntas.map((categoria) =>
        categoria.id === itemId ? (
          <>
            <BackTitledHeader title={categoria.title} />
            <ScrollView>
              
                <Text style={styles.Legend}>{categoria.legend}</Text>
              <View style={styles.container} key={categoria.id}>  
                {categoria.preguntas.map((pregunta) => (
                  
                  <View style={styles.questionContainer} key={pregunta.id}>
                    <View style={styles.containerPr}>
                      <Text style={styles.Ptitle}>{pregunta.pregunta}</Text>
                    </View>
                    <View style={styles.containerPr}>
                      <Text style={styles.Ptext}>{pregunta.respuesta}</Text>
                    </View>
                  </View>
                  
                ))}
              </View>
            </ScrollView>
          </>
        ) : null
      )}
    </>
  );
}

export default FaqScreen;

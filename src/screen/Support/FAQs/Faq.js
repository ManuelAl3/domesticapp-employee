import { Text, View, StyleSheet, ScrollView } from "react-native";
import * as React from "react";
import { CategoriasPreguntas } from "../../../constants/preguntasF";
import BackTitledHeader from "../../../components/BackTitleHeader";

function FaqScreen({ route, navigation }) {
  const { itemId } = route.params;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Poppins",
    },
    questionContainer: {
      width: "90%",
      margin: "0 auto 3rem auto",
    },
    containerPr: {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "1rem",
      margin: "1rem 0",
      padding: "1rem",
    },
    Ptitle: {
      textAlign: "center",
      fontSize: "14px",
      fontWeight: "bold",
    },
    Ptext: {
      textAlign: "Justified",
      fontSize: "14px",
      letterSpacing: "1px",
    },
    Legend: {
      textAlign: "center",
      fontSize: "14px",
      fontWeight: "bold",
      color: "#0bbbef",
      margin: "1rem 0",
    },
  });

  return (
    <>
      {CategoriasPreguntas.map((categoria) =>
        categoria.id === itemId ? (
          <>
            <BackTitledHeader title={categoria.title} />
            <ScrollView>
              <View style={styles.container} key={categoria.id}>
                <Text style={styles.Legend}>{categoria.legend}</Text>
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

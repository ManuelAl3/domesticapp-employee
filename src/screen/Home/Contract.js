import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
import { useAuth } from "../../context/auth-context";

function ContractScreen({ navigation }) {
  const { user } = useAuth();
  return (
    <>
    <BackTitledHeader title="Mi Contrato" />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image 
        style={styles.tinyLogo}
        source={user.image_url}
      />
      <Text>{user.full_name}</Text>
      <Text>... días desde la Firma de Contrato.</Text>
    </View>
    </>
  );
}

export default ContractScreen;
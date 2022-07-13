import * as React from "react";
import BackTitledHeader from "../../components/BackTitleHeader";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import colors from "../../assets/colors/colors";
import { useAuth } from "../../context/auth-context";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import DropDownPicker from 'react-native-dropdown-picker';
import { showEmployeecategory } from "../../services/employe-categories-services";

const ntdmn = require('number-to-date-month-name');

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
  React.useEffect(()=>{
    showEmployeecategory(user.id).then(setPuestos)
  }, [])
  const [open, setOpen] =  React.useState(false);
  const [puestos, setPuestos] =  React.useState("");
    const [value, setValue] =  React.useState("");
    const [items, setItems] = React.useState([]);

    let item = [{label: 'Puesto', value: ''}]
    if(puestos){
      puestos.forEach((puesto)=>{
        item.push({label: puesto.category_name, value: puesto.category_name})
      })
      if(items.length === 0){

        setItems(item);
      }
    }
  let handlePDF = async () => {

    const date = new Date();
    const mes = ntdmn.toMonth(date.getMonth() + 1);
    const now = user.country+", " + mes+ " " + date.getDate()+ " de "+date.getFullYear();

    
    const start_date = new Date(user.created_at.substr(0, 10).split("-").join("/"));

    const mes_actual = ntdmn.toMonth(start_date.getMonth() + 1);
    const start = start_date.getDate() + "° de "+mes_actual+" de "+start_date.getFullYear();
    const html = `
      <html>
      <style>
      body {
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        margin-left: 7vw;
        margin-right: 7vw;
      }
    
      h2 {
        text-align: center;
        margin-top: 4vh;
        margin-bottom: 4vh;
      }
    
      p {
        text-align: justify;
        margin-left: 5vw;
        margin-right: 5vw;
      }
    
      p1 {
        text-align: left;
        color: blue;
        margin-left: 15vw;
        margin-right: 15vw;
    
      }
    </style>
    
    <body>
      <div style="text-align: center;">
        <img style="width: 40%;" alt="logo"
          src="https://domesticapp-storage.s3.us-east-2.amazonaws.com/certificado/LETTERING.png" />
      </div>
      <br />
      <span> ${now}</span>
      <div class="h2">
        <h2><i> A QUIEN PUEDA INTERESAR</i> </h2>
      </div>
      <p>
        Calle 7 Sur N° 42B-125 Edificio WeWork piso 16 Tel. 3146242173
        Email: contabilidad@domesticapp.com.co
        ${now} A QUIEN PUEDA INTERESAR
        La suscrita Contadora de la empresa DOMESTICAPP S.A.S, certifica que la
        señora
        ${user.full_name} identificada con cédula de ciudadanía N°
        ${user.document_id} de Barbosa Ant; se encuentra vinculado laboralmente con
        contrato a termino indefinido desempeñandose como ${value} desde el día ${start}, con UN SALARIO MINIMO LEGAL VIGENTE (SMLV) más prestaciones sociales.
        La anterior certificación se expide a solicitud de la interesada.
      </p>
      <br />
      <p>
        Para mayor información favor comunicarse a los telefonos 5824585-
        3146242173, WhatsApp empresarial 3137515359.
      </p>
      <br /><br />
      <span>
        Atentamente,
      </span>
      <br />
      <img alt="logo" style="width: 30%; margin-bottom: -2.525rem;"
        src="https://domesticapp-storage.s3.us-east-2.amazonaws.com/certificado/Firma.png" />
      <br />
      <span>
        _______________________________
      </span>
      <br />
      <span>
        FRANKLIN ROGER CASTAÑEDA BUSTAMANTE
      </span>
      <br />
      <span>
        Gerente General
      </span>
      <br />
      <span>
        Domesticapp SAS
      </span>
      <br /><br /><br /><br />
      <div style="text-align: center;">
      <p1>
      <i> Calle 7 Sur N° 42B-125 Edificio WeWork piso 16 Tel. 3146242173
      </i>
      </p1>
      <p1>
      <i>
        Email: contabilidad@domesticapp.com.co</i>
      </p1>
      </div>
    </body>
      </html>
    `;

    const file = await printToFileAsync({
      html: html,
      base64: false,
    });

    await shareAsync(file.uri);

   
  };
  return (
    <SafeAreaView>
      <BackTitledHeader title="Mi Certificado Laboral" />
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 20,
          marginTop: 25,
          marginHorizontal: 10,
          paddingHorizontal: 25,
        }}
      >
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.title}>Datos de certificado</Text>

          <View style={{ textAlign: "justify", paddingHorizontal: 25 }}>
            {user ? (
              <>
                <Text style={styles.titleText}>
                  Nombre:{" "}
                  <Text style={{ fontWeight: "300" }}>{user.full_name} </Text>
                </Text>
                <Text style={styles.titleText}>
                  Inicio de contrato:{" "}
                  <Text style={{ fontWeight: "300" }}>
                    <Text style={{ fontWeight: "300" }}>
                      {user.created_at.substr(0, 10)}{" "}
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.titleText}>
                  Puesto: <Text style={{ fontWeight: "300" }}>{value}</Text>
                </Text>
                <View style={styles.containerButton}>
                <View style={{marginBottom: 20,}}>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
                </View>
                  <TouchableOpacity style={btnStyle} onPress={handlePDF}>
                    <Text style={styles.textButton}>
                      Descargar Certificación
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : null}
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

import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import * as React from "react";
import * as Facebook from 'expo-facebook';

function FacebookScreen({ navigation }) {
  const [userProfile, setUserProfile] = React.useState(null);
  async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: '551206009914007',
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.type(large)`);
        const user = (await response.json())
        Alert.alert('Logged in!', `Hi ${user.name}!`);
        setUserProfile(user)
        console.log(user)
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Login with Facebook"
        onPress={logIn}
      />
      { 
        userProfile ? (
          <>
            <Text>{userProfile.name}</Text>
            <Image
              style={{width: 100, height: 100, borderRadius: 50}}
              source={{
                uri: userProfile.picture.data.url,
              }}
      />
          </>
        ) : (<Text>Nada</Text>)
      }
    </View>
  );
}

export default FacebookScreen;
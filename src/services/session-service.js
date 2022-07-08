import apiFetch from "./api-fetch";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function login(credentials) {
  /*console.log(
    "%c 🇮🇳: login -> credentials ",
    "font-size:16px;background-color:#3b0230;color:white;",
    credentials
  );*/
  const { token, ...user } = await apiFetch("login", {
    body: credentials,
  });

  AsyncStorage.setItem('token', token);
  return user;
}

export async function logout() {
  await apiFetch("logout", { method: "DELETE" });
  AsyncStorage.removeItem('token');
}

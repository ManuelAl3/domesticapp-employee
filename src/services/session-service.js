import { tokenKey } from "../../config";
import apiFetch from "./api-fetch";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function login(credentials, loginType) {
  console.log(
    "%c 🇮🇳: login -> credentials ",
    "font-size:16px;background-color:#3b0230;color:white;",
    credentials
  );
  const { token, ...user } = await apiFetch(loginType, {
    body: credentials,
  });

  AsyncStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  await apiFetch("logout", { method: "DELETE" });
  AsyncStorage.removeItem(tokenKey);
}

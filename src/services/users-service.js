import { tokenKey } from "../../config";
import apiFetch from "./api-fetch";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUser() {
  
  const { _token, ...user } = await apiFetch("profile");
  //console.log(user);
  return user;
}

export async function createUser(newUser) {
  const { token, ...user } = await apiFetch('users', { body: newUser });
  AsyncStorage.setItem(tokenKey, token);
  return user;
}

export async function updateUser(data) {
  const { _token, ...user } = await apiFetch("profile", {
    body: data,
    method: "PATCH",
  });
  return user;
}

export async function deleteUser() {
  await apiFetch("users", { method: "DELETE" });
  AsyncStorage.removeItem(tokenKey);
}

export async function showEmployee(CategoryID) {
  return await apiFetch(`employee/${CategoryID}`);
}

export async function showEmploye() {
  return await apiFetch(`employee`);
}

export async function updateEmployee(data, userId) {

  return await apiFetch(`employees/${userId}`, {
    body: JSON.stringify(data),
    method: "PATCH",
    headers: { 'Content-Type': 'application/json' },
  });
}
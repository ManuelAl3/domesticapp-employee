import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser, updateUser } from "../services/users-service";
import { login, logout } from "../services/session-service";
import { useNavigation } from "@react-navigation/native";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    if(AsyncStorage.getItem('token')!==null){
      getUser()
      .then(setUser)
    }

  }, []);

  function handleLogin(credentials) {
    return login(credentials).then((user) => {
      setUser(user);
      navigation.navigate("Index");
    });
  }

  function handleUpdateEmployee(userData) {
    return updateUser(userData).then((user) => {
      setUser(user);
      navigation.navigate("Index");
    });
  }

  function handleLogout() {
    return logout().finally(() => {
      setUser(null);
    });
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        update: handleUpdateEmployee,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };

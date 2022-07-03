import * as React from "react";
import { login, logout } from "../services/session-service";
import { getUser } from "../services/users-service";
import { useNavigation } from "@react-navigation/native";
import { tokenKey } from "../../config";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const navigation = useNavigation();
  React.useEffect(() => {
    if (sessionStorage.getItem(tokenKey) !== null) {
      getUser()
        .then(setUser)
        .catch((error) => console.log(error));
    }
  }, []);

  function handleLogin(credentials) {
    return login(credentials).then((user) => {
      setUser(user);
      navigation.navigate("Main");
      /*if (user.new) {
        navigation.navigate("introduction");
      } else {
        navigation.navigate("Main");
      }*/
    });
  }

  function handleLogout() {
    return logout().finally(() => {
      setUser(null);
      navigation.navigate("");
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth };

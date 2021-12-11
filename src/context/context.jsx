import { useState } from "react";
import { createContext } from "react";
import {Auth } from "aws-amplify"
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const getCurrentUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setLogin(true)
      setUser(user)
      console.log(user)
      return {
        login: true,
        userInfo: user
      }
    } catch (e) {
      console.log(e);
      setLogin(false)
      return false
    }
  }
  const signIn = (isAuth, user) => {
    setLogin(isAuth)
    setUser(user)
  }
  return (
    <AuthContext.Provider value={{ isLogin, user, getCurrentUser, signIn  }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

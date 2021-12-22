import { useLayoutEffect } from "react";
import { useState, useContext } from "react";
import { AuthContext } from "./context/context";

export const useAuthCheck = () => {
  const { getCurrentUser } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useLayoutEffect(() => {
    getCurrentUser().then(({ login }) => {
      setAuthenticated(login);
      setLoading(false);
    });
  }, []);

  return {
    login: isAuthenticated,
    isLoading,
  };
};

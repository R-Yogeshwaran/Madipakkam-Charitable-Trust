import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const user = await AsyncStorage.getItem("user");
      await setUser(JSON.parse(user));
    }
    fetchData();
  }, []);
  const login = async (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

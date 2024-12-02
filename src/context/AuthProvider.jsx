import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

// const [userData, setUserData] = useState(null);
const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const [userData, setUserData] = useState(null); // Default values

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage(); // Fallback to defaults
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

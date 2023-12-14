import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");



  return (
    <AuthContext.Provider
      value={{
        showPassword,
        setShowPassword,
        username,
        setusername,
        password,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

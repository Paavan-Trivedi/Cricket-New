import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    axios
      .post(
        "http://192.168.29.84:8000/accounts/api/login/",
        {
          username: name,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then(() => {
        setRegister(true);
        navigate("/");
      })
      .catch((error) => {
        alert("Please enter valid data", error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        showPassword,
        setShowPassword,
        name,
        setName,
        password,
        setPassword,
        register,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

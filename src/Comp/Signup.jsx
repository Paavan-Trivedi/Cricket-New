import React, { useState } from "react";
import "./Signup.css";
// import axios from "axios";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName  = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://192.168.29.84:8000"
// });

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async () => {
    await fetch("http://192.168.29.84:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: name,
        email,
        password,
      }),
    });
    setRegister(true);
    navigate("/login");
  };

  return (
    <div>
      <div className="Signup-form">
        <h3 className="heading">Signup Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Name"
          id="username"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          id="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <span
          onClick={() => setShowPassword(!showPassword)}
          className="signup-eye"
        >
          {showPassword ? (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <button
          type="submit"
          onClick={(e) => submitHandler(e)}
          className="signup-button"
        >
          Signup
        </button>
      </div>
    </div>
  );
}

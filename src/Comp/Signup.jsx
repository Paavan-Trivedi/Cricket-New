import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName  = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://192.168.29.84:8000"
});

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    client.post(
      "/api/register",
      {
        email: email,
        username: name,
        password: password
      }
    ).then(function(res) {
      client.post(
        "/api/login",
        {
          email: email,
          password: password
        }
      ).then(function(res) {
        setCurrentUser(true);
      });
    });
    
  };

  return (
    <div>
      <form className="Signup-form" onSubmit={submitHandler}>
        <h3>Signup Here</h3>

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

        <button className="signup-button">Signup</button>
      </form>
    </div>
  );
}

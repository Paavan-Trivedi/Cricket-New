import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async () => {

    await fetch("http://192.168.29.84:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: name,
        password : password,
      }),

    });

  };



  return (
    <div> 
      <div className="Login-form">
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Name"
          id="username"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="login-eye"
        >
          {showPassword ? (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <button type="submit" className="login-button" onClick={(e) => submitHandler(e)}>Log In</button>
        <br />
        <br />
        <p>
          not have an account? <NavLink to={"/signup"} className="link">Signup</NavLink>
        </p>
      </div>
    </div>
  );
}

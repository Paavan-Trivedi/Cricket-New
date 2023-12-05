import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const submitHandler = () => {
    axios
      .post(
        "http://192.168.29.84:8000/api/login/",
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
        console.error("Error occurred:", error);
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

        <button
          type="submit"
          className="login-button"
          onClick={(e) => submitHandler(e)}
        >
          Log In
        </button>
        <br />
        <br />
        <p>
          not have an account?{" "}
          <NavLink to={"/signup"} className="link">
            Signup
          </NavLink>
        </p>
      </div>
    </div>
  );
}

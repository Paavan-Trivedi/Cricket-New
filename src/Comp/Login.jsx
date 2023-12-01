import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const Loginsubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <div>
      <form className="Login-form" onSubmit={Loginsubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Name"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          id="password"
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

        <button className="login-button">Log In</button>
        <br />
        <br />
        <p>
          not have an account? <NavLink to={"/signup"}>Signup</NavLink>
        </p>
      </form>
    </div>
  );
}

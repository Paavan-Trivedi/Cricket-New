import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const Loginsubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    console.log("hello");
  };

  return (
    <div>
      <form className="Login-form" onSubmit={Loginsubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Email or Name" id="username" />

        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          id="password"
          name="password"
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

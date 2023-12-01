import React from "react";
import "./Login.css";
import { Link, NavLink } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <form className="Login-form">
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

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

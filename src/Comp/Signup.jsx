import React from "react";
import "./Signup.css";
export default function Signup() {
  return (
    <div>
      <form className="Signup-form">
        <h3>Signup Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Name" id="username" />

        <label for="email">Email</label>
        <input type="email" placeholder="Email" id="email" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button className="signup-button">Signup</button>
      </form>
    </div>
  );
}

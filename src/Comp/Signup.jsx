import React, { useState } from "react";
import "./Signup.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const Signupsubmit = async (e) => {
    e.preventDefault();
  
  };

  return (
    <div>
      <form className="Signup-form" onSubmit={Signupsubmit}>
        <h3>Signup Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Name"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

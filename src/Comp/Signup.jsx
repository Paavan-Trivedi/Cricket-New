import React, { useState } from "react";
import "./Signup.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const Signupsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="Signup-form" onSubmit={Signupsubmit}>
        <h3>Signup Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Name" name="username" id="username" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          id="password"
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

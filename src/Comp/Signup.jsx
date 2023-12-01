import React, { useState } from "react";
import "./Signup.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username:"",
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData([
      (prev) => [
        {
          ...prev,
          [event.target.name]: event.target.value,
        },
      ],
    ]);
  }

  const Signupsubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form className="Signup-form" onSubmit={Signupsubmit}>
        <h3>Signup Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Name" id="username" value={formData.username} onChange={changeHandler} />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" id="email" value={formData.email} onChange={changeHandler} />

        <label htmlFor="password">Password</label>
        <input type={showPassword ? "text" : "password"} placeholder="Password" id="password" value={formData.password} onChange={changeHandler} />

        <span
          onClick={() => setShowPassword(!showPassword)}
          className="signup-eye"
        >
          {showPassword ? (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          ) : (
            < AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <button className="signup-button">Signup</button>
      </form>
    </div>
  );
}

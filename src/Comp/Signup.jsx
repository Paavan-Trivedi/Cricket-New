import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const submitHandler = () => {
    axios
      .post("http://192.168.29.84:8000/accounts/api/register/", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/login")
        toast.success("Register Successfully")
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  return (
    <div>
      <div className="Signup-form">
        <h3 className="heading">Signup Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Name"
          id="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
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

        <button
          type="submit"
          onClick={(e) => submitHandler(e)}
          className="signup-button"
        >
          Signup
        </button>
      </div>
    </div>
  );
}

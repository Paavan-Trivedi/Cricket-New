import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import "./Login.css"


export default function Login({ onLogin }) {
  const {
    showPassword,
    setShowPassword,
    username,
    setusername,
    password,
    setPassword,
  } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post('http://192.168.29.84:8000/accounts/api/login/', {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data && response.data.token) {
          onLogin(response.data);
          navigate("/")
          localStorage.setItem("login", true)
          toast.success("login Successfully")
        }
      })
      .catch((error) => {
        console.error('Login failed:', error);
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
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span onClick={() => setShowPassword(!showPassword)} className="login-eye">
          {showPassword ? (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <button type="submit" className="login-button" onClick={() => handleLogin()}>
          Log In
        </button>
        <br />
        <br />
        <p>
          not have an account?
          <NavLink to={'/signup'} className="link">
            Signup
          </NavLink>
        </p>
      </div>
    </div>
  );
}

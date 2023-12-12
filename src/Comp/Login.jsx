import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import "./Login.css"


export default function Login() {
  const {
    showPassword,
    setShowPassword,
    name,
    setName,
    password,
    setPassword,
    register,
    login,
  } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name == '' && password == "") {
      toast.error("Pls Fill Data")
    }else{
      localStorage.setItem("login", true);
      navigate("/");
      toast.success("Login Successfully");
    }
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

        <button type="submit" className="login-button" onClick={() =>handleLogin()}>
          Log In
        </button>
        <br />
        <br />
        <p>
          not have an account?{' '}
          <NavLink to={'/signup'} className="link">
            Signup
          </NavLink>
        </p>
      </div>
    </div>
  );
}

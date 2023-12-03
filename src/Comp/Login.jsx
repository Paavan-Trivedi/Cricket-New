import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [inpval, setInpval] = useState({
    username: '',
    password: ""
  })

  const [data, setData] = useState([])

  const navigate = useNavigate()

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }

  const addData = (e) => {
    e.preventDefault();

    const getuser = localStorage.getItem("user")
    console.log(getuser)

    if (username == '') {
      alert("name filed is required")
    } else if (password == "") {
      alert("password filed is required")
    } else {

      if (getuser && getuser.length) {
        const userdata = JSON.parse(getuser)
        const userlogin = userdata.filter((el, k) => {
          return el.username === username && el.password === password
        })

        if (userlogin.length === 0) {
          alert("invalid details")
        } else {
          console.log("user login successfully")
          navigate("/")
        }
      }
    }
  }

  return (
    <div>
      <form className="Login-form">
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={getdata} placeholder="Email or Name" id="username" />

        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          id="password"
          name="password"
          onChange={getdata}
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

        <button className="login-button" onClick={addData}>Log In</button>
        <br />
        <br />
        <p>
          not have an account? <NavLink to={"/signup"}>Signup</NavLink>
        </p>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import "./Signup.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [inpval, setInpval] = useState({
    username: '',
    email: "",
    password: ""
  })

  const [data, setData] = useState([])

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

    const { username, email, password } = inpval;

    if (username == '') {
      alert("name filed is required")
    } else if (email == '') {
      alert("email filed is required")
    } else if (!email.includes("@")) {
      alert("plz enter valid email address")
    } else if (password == "") {
      alert("password filed is required")
    } else {
      localStorage.setItem("user", JSON.stringify([...data, inpval]))
    }
  }

  return (
    <div>
      <form className="Signup-form">
        <h3>Signup Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Name" onChange={getdata} name="username" id="username" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" onChange={getdata} name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          onChange={getdata}
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

        <NavLink to="/login"> <button className="signup-button" onClick={addData}>Signup</button></NavLink>
      </form>
    </div>
  );
}

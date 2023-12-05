import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
 
  return (
    <>
      <nav className="navbar">
        <ul className="nav">
          <li className="logo">
            <img src="Main Logo.png" alt="" />
          </li>
          <li>
            <h1 className="heading">Cric-Info</h1>
          </li>
          <div className="hdbtn">
          
          <li>
            <NavLink to={"/login"}>
              <button className="login">Login</button>
            </NavLink>
          </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

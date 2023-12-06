import React from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();

  const Logout = () => {
    navigate("/login")
  }

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
              <button className="login" onClick={() => Logout()}>Logout</button>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

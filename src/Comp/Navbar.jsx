import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();

  const logoutHandler=()=>{
    localStorage.removeItem("login")
    toast.success("logout Successfully")
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
            <h1 className="headin">Cric-Info</h1>
          </li>
          <div className="hdbtn">
            <li>
              <button className="logout" onClick={() => logoutHandler()}>
                Logout
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

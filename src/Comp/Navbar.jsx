import React from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";
import { toast } from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };

  const logoutHandler = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("name");
    navigate("/login");
    toast.success("Logout Successfully");
  };

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
          <User />
          <div className="hdbtn">
            <li>
              {localStorage.getItem("login") ? (
                <button className="logout" onClick={() => logoutHandler()}>
                  Logout
                </button>
              ) : (
                <button className="login" onClick={() => loginHandler()}>
                  Login
                </button>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

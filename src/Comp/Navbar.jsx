import React from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
import axios from "axios";

export default function Navbar({ setLoggedIn, setToken, token }) {
  const navigate = useNavigate();


  const logoutHandler = () => {
    axios
      .post('http://192.168.29.84:8000/accounts/api/logout/', null, {
        headers: { Authorization: `Token ${token}` },
      })
      .then(() => {
        setToken('');
        setLoggedIn(false);
        navigate("/login")
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
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

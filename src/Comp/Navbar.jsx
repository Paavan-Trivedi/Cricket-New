import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav"  >
          <li className="logo">
            <img src="Main Logo.png" alt="" />
          </li>
          <li  >
            <h1 >Cric-Info</h1>
          </li>
          <li><button>Signup</button></li>
          <li><button>Login</button></li>
        </ul>
      </nav>
    </>
  );
}

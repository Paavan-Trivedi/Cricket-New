import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handUser = () => {
    console.log("hii");
  };

  return (
    <div className="main">
      <nav className="navbar">
        <ul className="nav">
          <li className="logo">
            <img src="Main Logo.png" alt="" />
          </li>
          <li className="search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search"
            />
            <img className="searchlogo" src="search.png" alt="" />
          </li>
          <li className="profile">
            {isAuthenticated && (
              <p>
                {" "}
                <img src={user.picture} alt="" />
                <p className="username">{user.name}</p>
              </p>
            )}
            {/* <img src={user.picture} alt="" /> */}

            {isAuthenticated ? (
              <button
                className="logout"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button className="login" onClick={() => loginWithRedirect()}>
                Login
              </button>
            )}
          </li>
        </ul>
      </nav>

      <h1 style={{ textAlign: "center", display: "block" }}>
        International Teams
      </h1>
      <div className="view">
        <div className="card">
          <div className="cards">
            <NavLink className='Indiateam' to={"india"}>
            <div className="card-box" onClick={handUser}>
              
              <img
                style={{ width: "200px", height: "120px" }}
                src="India.png"
                alt=""
              />
              <div className="intro">
                
                <h1>INDIA</h1>
                <p>
                  The Indian cricket team, a formidable force in international
                  cricket, boasts a rich history, diverse talent, and unwavering
                  passion.
                </p>
              </div>
            </div>
            </NavLink>
            <div className="card-box">
              <img
                style={{ width: "200px", height: "120px" }}
                src="New Zealand.png"
                alt=""
              />
              <div className="intro">
                <h1>NEW ZEALAND</h1>
                <p>
                  The New Zealand cricket team, known as the Blackcaps, exhibits
                  skill, resilience, and sportsmanship globally.
                </p>
              </div>
            </div>
            <div className="card-box">
              <img
                style={{ width: "200px", height: "120px" }}
                src="Australia.jpg"
                alt=""
              />
              <div className="intro">
                <h1>AUSTRALIA</h1>
                <p>
                  The Australian cricket team, embodying grit and skill,
                  dominates the world stage with a storied legacy.
                </p>
              </div>
            </div>
            <div className="card-box">
              <img
                style={{ width: "200px", height: "120px" }}
                src="England.jpg"
                alt=""
              />
              <div className="intro">
                <h1>ENGLAND</h1>
                <p>
                  The England cricket team, a bastion of tradition and skill,
                  epitomizes cricket excellence on the global stage.
                </p>
              </div>
            </div>
            <div className="card-box">
              <img
                style={{ width: "200px", height: "120px" }}
                src="South Africa.jpg"
                alt=""
              />
              <div className="intro">
                <h1>SOUTH AFRICA</h1>
                <p>
                  The South Africa cricket team, Proteas, blends talent,
                  resilience, and diversity, symbolizing cricket prowess
                  internationally.
                </p>
              </div>
            </div>
            <div className="card-box">
              <img
                style={{ width: "200px", height: "120px" }}
                src="West Indies.jpg"
                alt=""
              />
              <div className="intro">
                <h1>WEST INDIES</h1>
                <p>
                  The West Indies cricket team, a vibrant blend of flair and
                  power, has a legendary cricketing legacy.
                </p>
              </div>
            </div>
            <div className="card-box">
              <img
                style={{ width: "200px", height: "120px" }}
                src="Ireland.png"
                alt=""
              />
              <div className="intro">
                <h1>IRELAND</h1>
                <p>
                  The Ireland cricket team, emerging with passion and
                  determination, contributes to cricket's global landscape
                  impressively.
                </p>
              </div>
            </div>
            <div className="card-box">
              <img
                style={{ width: "200px", height: "120px" }}
                src="Afghanistan.png"
                alt=""
              />
              <div className="intro">
                
                <h1>AFGHANISTAN</h1>
                <p>
                  The Afghanistan cricket team, a rising force, embodies
                  resilience and talent, making a mark on the international
                  stage.
                </p>
              </div>
            </div>
            <div className="card-box">
              <img
                style={{ width: "200px", height: "120px" }}
                src="Bangladesh.png"
                alt=""
              />
              <div className="intro">
                <h1>BANGLADESH</h1>
                <p>
                  The Bangladesh cricket team, a symbol of resilience and
                  growing prowess, continues to make strides globally.
                </p>
              </div>
            </div>
            <div className="card-box">
              <img
                style={{ width: "200px", height: "120px" }}
                src="Zimbabwe.png"
                alt=""
              />
              <div className="intro">
                
                <h1>ZIMBABWE</h1>
                <p>
                  The Zimbabwe cricket team, displaying resilience and spirit,
                  contributes to the cricketing world with determination and
                  talent.
                </p>
              </div>
            </div>
            <div className="card-box">
              <img
                style={{ width: "200px", height: "120px" }}
                src="Pakistan.png"
                alt=""
              />
              <div className="intro">
                
                <h1>PAKISTAN</h1>
                <p>
                  The Pakistan cricket team, a powerhouse of skill and passion,
                  commands global respect with its historic triumphs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ranking-table">Ranking Table</div>
      </div>
    </div>
  );
}

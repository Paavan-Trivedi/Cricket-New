import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Bangladesh() {
  const [search, setSearch] = useState("");
  const [Players, setPlayers] = useState([]);

  const getUsers = () => {
    axios
      .get("http://192.168.29.84:8000/playerapi/")
      .then((response) => {
        setPlayers(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="Playersearch">
        <input
          type="search"
          name="search"
          id="Playersearch"
          placeholder="search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <NavLink to={"/Bangladesh"}>
        <button className="Btn">All</button>
      </NavLink>
      <NavLink to={"/Bangladesh/male"}>
        <button className="Btn">Men</button>
      </NavLink>
      <NavLink to={"/Bangladesh/female"}>
        <button className="Btn">Women</button>
      </NavLink>

      <div className="players">
        {Players.filter((val) => {
          if (search == "" && val.player_country == "bangladesh-25") {
            return val;
          } else if (
            val.player_country == "bangladesh-25" &&
            val.player_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        }).map((player) => {
          return (
            <ul key={player.player_id}>
              <div className="playerdets">
                <li className="playername">{player.player_name}</li>
                <li className="playerimg">
                  <img src={player.player_image} alt="" />
                </li>
              </div>
              <div className="playerslist">
                <li>Role: {player.player_playing_role}</li>
                <li>Age: {player.player_age}</li>
                <li>Gender: {player.player_gender}</li>
              </div>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export function BaMale() {
  const [search, setSearch] = useState("");
  const [Players, setPlayers] = useState([]);

  const getUsers = () => {
    axios
      .get("http://192.168.29.84:8000/playerapi/ ")
      .then((response) => {
        setPlayers(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="Playersearch">
        <input
          type="search"
          name="search"
          id="Playersearch"
          placeholder="search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <NavLink to={"/Bangladesh"}>
        <button className="Btn">All</button>
      </NavLink>
      <NavLink to={"/Bangladesh/male"}>
        <button className="Btn">Men</button>
      </NavLink>
      <NavLink to={"/Bangladesh/female"}>
        <button className="Btn">Women</button>
      </NavLink>
      <div className="players">
        {Players.filter((val) => {
          if (
            val.player_gender == "Male" &&
            val.player_country == "bangladesh-25" &&
            search == "" &&
            val.player_country
          ) {
            return val;
          } else if (
            val.player_gender == "Male" &&
            val.player_country == "bangladesh-25" &&
            val.player_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        }).map((player) => {
          return (
            <ul key={player.player_id}>
              <div className="playerdets">
                <li className="playername">{player.player_name}</li>
                <li className="playerimg">
                  <img src={player.player_image} alt="" />
                </li>
              </div>
              <div className="playerslist">
                <li>Role: {player.player_playing_role}</li>
                <li>Age: {player.player_age}</li>
                <li>Gender: {player.player_gender}</li>
              </div>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export function BaFemale() {
  const [search, setSearch] = useState("");
  const [Players, setPlayers] = useState([]);

  const getUsers = () => {
    axios
      .get("http://192.168.29.84:8000/playerapi/")
      .then((response) => {
        setPlayers(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="Playersearch">
        <input
          type="search"
          name="search"
          id="Playersearch"
          placeholder="search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <NavLink to={"/Bangladesh"}>
        <button className="Btn">All</button>
      </NavLink>
      <NavLink to={"/Bangladesh/male"}>
        <button className="Btn">Men</button>
      </NavLink>
      <NavLink to={"/Bangladesh/female"}>
        <button className="Btn">Women</button>
      </NavLink>
      <div className="players">
        {Players.filter((val) => {
          if (
            val.player_gender == "female" &&
            search == "" &&
            val.player_country == "bangladesh-25"
          ) {
            return val;
          } else if (
            val.player_gender == "female" &&
            val.player_country == "bangladesh-25" &&
            val.player_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        }).map((player) => {
          return (
            <ul key={player.player_id}>
              <div className="playerdets">
                <li className="playername">{player.player_name}</li>
                <li className="playerimg">
                  <img src={player.player_image} alt="" />
                </li>
              </div>
              <div className="playerslist">
                <li>Role: {player.player_playing_role}</li>
                <li>Age: {player.player_age}</li>
                <li>Gender: {player.player_gender}</li>
              </div>
            </ul>
          );
        })}
      </div>
    </>
  );
}

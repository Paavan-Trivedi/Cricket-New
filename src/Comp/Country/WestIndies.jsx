import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function WestIndies() {
  const [search, setSearch] = useState("");
  const [Players, setPlayers] = useState([]);

  const getUsers = () => {
    axios
      .get("http://192.168.29.84:8000/app/playerapi/?player_country=west-indies-4&player_gender=&player_playing_role=")
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
      <NavLink to={"/WestIndies"}>
        <button className="Btn">All</button>
      </NavLink>
      <NavLink to={"/WestIndies/male"}>
        <button className="Btn">Men</button>
      </NavLink>
      <NavLink to={"/WestIndies/female"}>
        <button className="Btn">Women</button>
      </NavLink>

      <div className="players">
        {Players.filter((val) => {
          if (
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

export function WeMale() {
  const [search, setSearch] = useState("");
  const [Players, setPlayers] = useState([]);

  const getUsers = () => {
    axios
      .get("http://192.168.29.84:8000/app/playerapi/?player_country=west-indies-4&player_gender=male&player_playing_role=")
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
      <NavLink to={"/WestIndies"}>
        <button className="Btn">All</button>
      </NavLink>
      <NavLink to={"/WestIndies/male"}>
        <button className="Btn">Men</button>
      </NavLink>
      <NavLink to={"/WestIndies/female"}>
        <button className="Btn">Women</button>
      </NavLink>
      <div className="players">
        {Players.filter((val) => {
          if (
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

export function WeFemale() {
  const [search, setSearch] = useState("");
  const [Players, setPlayers] = useState([]);

  const getUsers = () => {
    axios
      .get("http://192.168.29.84:8000/app/playerapi/?player_country=west-indies-4&player_gender=female&player_playing_role=")
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
      <NavLink to={"/WestIndies"}>
        <button className="Btn">All</button>
      </NavLink>
      <NavLink to={"/WestIndies/male"}>
        <button className="Btn">Men</button>
      </NavLink>
      <NavLink to={"/WestIndies/female"}>
        <button className="Btn">Women</button>
      </NavLink>
      <div className="players">
        {Players.filter((val) => {
          if (
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

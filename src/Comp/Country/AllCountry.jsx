import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams, useSearchParams } from "react-router-dom";

export default function CountryPlayer() {
  const [search, setSearch] = useState("");
  const [Players, setPlayers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { country } = useParams();

  const getUsers = () => {
    axios
      .get(
        `http://192.168.29.84:8000/app/playerapi/?player_country=${country}&player_gender=&player_playing_role=`
      )
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

  const CpHandler = () => {
    getUsers();
  };

  const MaleHandle = (Male) => {
    setSearchParams("gender", Male);
    getUsers(Male);
  };

  const FemaleHandle = () => {
    getUsers();
  };

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

      <button className="Btn" onClick={() => CpHandler()}>
        All
      </button>
      <button className="Btn" onClick={() => MaleHandle("Male")}>
        Men
      </button>
      <button className="Btn" onClick={() => FemaleHandle("female")}>
        Women
      </button>

      <div className="players">
        {Players.filter((val) => {
          if (val.player_name.toLowerCase().includes(search.toLowerCase())) {
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

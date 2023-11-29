import React, { useEffect, useState } from "react";
// import Players from "./IndiaPlayers.json";
import { NavLink } from "react-router-dom";

export default function India() {

  const [search, setSearch] = useState("")
  const [Players, setPlayers] = useState([])

    const getusers = async () => {
        try {
            const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal');
            const data = await response.json();

            setPlayers(data.player || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getusers();
    }, [])

  return (
    <>
      <div className="Playersearch">
        <input
          type="search"
          name="search"
          id="Playersearch"
          placeholder="search"
          onChange={(event) => { setSearch(event.target.value) }}
        />
      </div>
      <NavLink to={"/india"} ><button className="Btn" >All</button> </NavLink>
      <NavLink to={"/male"} ><button className="Btn" >Men</button> </NavLink>
      <NavLink to={"/female"} ><button className="Btn" >Women</button> </NavLink>

      <div className="players">
        {Players.filter((val) => {
          if (search == '') {
            return val
          }
          else if (val.strPlayer.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }

        })
          .map((player) => {
            return (
              <ul>
                <div className="playerdets">
                  <li className="playername">{player.strPlayer}</li>
                  <li className="playerimg">
                  <img src={player.strThumb} alt="" />
                  </li>
                </div>
                <div className="playerslist">
                  <li>Age: {player.dateBorn}</li>
                  <li>{player.strGender}</li>
                </div>
              </ul>
            );
          })}
      </div>
    </>
  );
}
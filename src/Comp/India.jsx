import React, { useState } from "react";
import Players from "./IndiaPlayers.json";

export default function India() {

  const [search, setSearch] = useState("")

  return (
    <>
    <div className="Playersearch">
            <input
              type="search"
              name="search"
              id="Playersearch"
              placeholder="search"
              onChange={(event)=>{setSearch(event.target.value)}}
            />
            Hello
          </div>
      <div className="players">
        {Players.filter((val)=>{
          if (search == '') {
            return val
          }
          else if(val.player_name.toLowerCase().includes(search.toLowerCase())){
            return val;
          }
          
        })
        .map((player) => {
          return (
            <ul>
              <div className="playerdets">
                <li className="playername">{player.player_name}</li>
                <li className="playerimg">
                  <img src="India.png" alt="" />
                </li>
              </div>
              <div className="playerslist">
                <li>Age: {player.player_age}</li>
                <li>{player.Gender}</li>
              </div>
            </ul>
          );
        })}
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import Players from "./india-6_player.json";
import { NavLink } from "react-router-dom";

export default function India() {

  const [search, setSearch] = useState("")
  // const [Players, setPlayers] = useState([])

  //   const getusers = async () => {
  //       try {
  //           const response = await fetch('http://192.168.0.214:3000/addPlayer');
  //           const data = await response.json();

  //           setPlayers(data|| []);
  //       } catch (error) {
  //           console.error('Error fetching data:', error);
  //       }
  //   }

  //   useEffect(() => {
  //       getusers();
  //   }, [])

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
          else if (val.playerName.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }

        })
          .map((player, index) => {
            return (
              <ul>
                <div className="playerdets">
                  <li className="playername">{player.player_name}</li>
                  <li className="playerimg">
                    <img src={player.player_image} alt="" />
                  </li>
                </div>
                <div className="playerslist">
                  <li>Role: {player.Playing_role}</li>
                  <li>Age: {player.player_age}</li>
                  <li>Gender: {player.Gender}</li>
                </div>
              </ul>
            );
          })}
      </div>
    </>
  );
}

export function Male() {
  const [search, setSearch] = useState("")
  // const [Players, setPlayers] = useState([])

  //   const getusers = async () => {
  //       try {
  //           const response = await fetch('http://192.168.0.214:3000/addPlayer');
  //           const data = await response.json();

  //           setPlayers(data|| []);
  //       } catch (error) {
  //           console.error('Error fetching data:', error);
  //       }
  //   }

  //   useEffect(() => {
  //       getusers();
  //   }, [])
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
          if (val.Gender == "Male" && search == '') {
            return val
          }
          else if (val.Gender == "Male" && val.playerName.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }

        })
          .map((player) => {
            return (
              <ul>
                <div className="playerdets">
                  <li className="playername">{player.player_name}</li>
                  <li className="playerimg">
                    <img src={player.player_image} alt="" />
                  </li>
                </div>
                <div className="playerslist">
                  <li>Role: {player.Playing_role}</li>
                  <li>Age: {player.player_age}</li>
                  <li>Gender: {player.Gender}</li>
                </div>
              </ul>
            );
          })}
      </div>
    </>


  )
}

export function Female() {
  const [search, setSearch] = useState("")
  // const [Players, setPlayers] = useState([])

  // const getusers = async () => {
  //   try {
  //     const response = await fetch('http://192.168.0.214:3000/addPlayer');
  //     const data = await response.json();

  //     setPlayers(data || []);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  // useEffect(() => {
  //   getusers();
  // }, [])
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
          if (val.Gender == "female" && search == '') {
            return val
          }
          else if (val.Gender == "female" && val.playerName.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }

        })
          .map((player) => {
            return (
              <ul>
                <div className="playerdets">
                  <li className="playername">{player.player_name}</li>
                  <li className="playerimg">
                    <img src={player.player_image} alt="" />
                  </li>
                </div>
                <div className="playerslist">
                  <li>Role: {player.Playing_role}</li>
                  <li>Age: {player.player_age}</li>
                  <li>Gender: {player.Gender}</li>
                </div>
              </ul>
            );
          })}
      </div>
    </>


  )
}

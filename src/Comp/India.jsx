import React, { useEffect, useState } from "react";
// import Players from "./IndiaPlayers.json";
import { NavLink } from "react-router-dom";

export default function India() {

  const [search, setSearch] = useState("")
  const [Players, setPlayers] = useState([])

    const getusers = async () => {
        try {
            const response = await fetch('http://192.168.0.214:3000/addPlayer');
            const data = await response.json();

            setPlayers(data|| []);
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
          else if (val.playerName.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }

        })
          .map((player) => {
            return (
              <ul>
                <div className="playerdets">
                  <li className="playername">{player.playerName}</li>
                  <li className="playerimg">
                  <img src={player.image} alt="" />
                  </li>
                </div>
                <div className="playerslist">
                  <li>Age: {player.age}</li>
                  <li>{player.gender}</li>
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
  const [Players, setPlayers] = useState([])

    const getusers = async () => {
        try {
            const response = await fetch('http://192.168.0.214:3000/addPlayer');
            const data = await response.json();

            setPlayers(data|| []);
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
          if (val.gender == "male" && search == '') {
            return val
          }
          else if (val.gender == "male" && val.playerName.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }

        })
        .map((player) => {
          return (
            <ul>
              <div className="playerdets">
                <li className="playername">{player.playerName}</li>
                <li className="playerimg">
                <img src={player.image} alt="" />
                </li>
              </div>
              <div className="playerslist">
                <li>Age: {player.age}</li>
                <li>{player.gender}</li>
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
  const [Players, setPlayers] = useState([])

    const getusers = async () => {
        try {
            const response = await fetch('http://192.168.0.214:3000/addPlayer');
            const data = await response.json();

            setPlayers(data|| []);
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
          if (val.gender == "female" && search == '') {
            return val
          }
          else if (val.gender == "female" && val.playerName.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }

        })
        .map((player) => {
          return (
            <ul>
              <div className="playerdets">
                <li className="playername">{player.playerName}</li>
                <li className="playerimg">
                <img src={player.image} alt="" />
                </li>
              </div>
              <div className="playerslist">
                <li>Age: {player.age}</li>
                <li>{player.gender}</li>
              </div>
            </ul>
          );
        })}
    </div>
  </>


  )
}

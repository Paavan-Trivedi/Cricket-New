import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
const RankingTable = () => {
  const [Players, setPlayers] = useState([]);
  
  const getdata = () => {
    axios
      .get("http://192.168.29.128:8000/app/icc_batting/")
      .then((response) => {
        setPlayers(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    getdata();
  }, []);


  return (
    <div className="ranking-table">
      <h2 className="rank">Ranking Table</h2>
      <button className="Btn">Batting</button>
      <button className="Btn">Bowling</button>
      <button className="allrounder-button">All Rounder</button>
      <div className="mainrank">
        {Players.map((player) => {
          return (
            <ul key={player.id} className="ranktable">
                <li className="">{player.player.id}</li>
                <li className="">{player.player.name}</li>
                <li className="">
                  <img src={player.player.image} alt="" />
                </li>
                <li>Country: {player.player.country}</li>
                <li>Gender: {player.gender}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default RankingTable;

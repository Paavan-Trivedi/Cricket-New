import React, { useEffect, useState } from "react";
import axios from "axios";
const RankingTable = () => {
  const [Players, setPlayers] = useState([]);

  const getdata = () => {
    axios
      .get("http://192.168.29.128:8000/player_info_api/")
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
      <h2>Ranking Table</h2>
      <div>
        {Players.map((player) => {
          return (
            <ul key={player.id}>
              <div className="">
                <li className="">{player.id}</li>
                <li className="">{player.name}</li>
                <li className="">
                  <img src={player.image} alt="" />
                </li>
              </div>
              <div className="">
                <li>Role: {player.country}</li>
                <li>Gender: {player.gender}</li>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default RankingTable;

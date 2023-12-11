import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const RankingTable = () => {
  const [players, setPlayers] = useState([]);
  const [category, setCategory] = useState("");

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

  const handleCategoryChange = (category) => {
    setCategory(category);
    if (category === "Batting") {
      getdata("http://192.168.29.128:8000/app/icc_batting/");
    } else if (category === "Bowling") {
      getdata("http://192.168.29.128:8000/app/icc_bowling/");
    } else if (category === "AllRounder") {
      getdata("http://192.168.29.128:8000/app/icc_all_rounder/");
    }
  };

  return (
    <div className="ranking-table">
      <h2 className="rank">Ranking Table</h2>
      <button className="btnr" onClick={() => handleCategoryChange("Batting")}>
        Batting
      </button>
      <button className="btnr" onClick={() => handleCategoryChange("Bowling")}>
        Bowling
      </button>
      <button className="allrounder-button" onClick={() => handleCategoryChange("AllRounder")}>
        All Rounder
      </button>

      <div className="mainrank">
        {players.map((player, index) => {
          return (
            <ul key={index} className="ranktable">
              <li className="">{player.position}</li>
              <li className="">{player.series}</li>
              <li className="">{player.player.name}</li>
              <li className="">
                <img src={player.player.image} alt="" />
              </li>
              <li>Country: {player.player.country}</li>
              <li>Gender: {player.player.gender}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default RankingTable;


// import React, { useEffect, useState } from "react";
// import "../App.css";
// import axios from "axios";
// const RankingTable = () => {
//   const [Players, setPlayers] = useState([]);

//   const getdata = () => {
//     axios
//       .get("http://192.168.29.128:8000/app/icc_batting/")
//       .then((response) => {
//         setPlayers(response.data || []);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };
//   useEffect(() => {
//     getdata();
//   }, []);

//   const BattingHandler = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <div className="ranking-table">
//       <h2 className="rank">Ranking Table</h2>
//       <button className="btnr" onClick={(e) => BattingHandler(e)}>
//         Batting
//       </button>
//       <button className="btnr">Bowling</button>
//       <button className="allrounder-button">All Rounder</button>

//       <div className="mainrank">
//         {Players.map((player, index) => {
//           return (
//             <ul key={index} className="ranktable">
//               <li className="">{player.position}</li>
//               <li className="">{player.player.name}</li>
//               <li className="">
//                 <img src={player.player.image} alt="" />
//               </li>
//               <li>Country: {player.player.country}</li>
//               <li>Gender: {player.player.gender}</li>
//             </ul>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default RankingTable;

import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const RankingTable = () => {
  const [players, setPlayers] = useState([]);
  const [category, setCategory] = useState("");
  const [format, setFormat] = useState("");
  const [gender, setGender] = useState("");
  const [formatSelected, setFormatSelected] = useState(false);

  const getdata = (url) => {
    axios
      .get(url)
      .then((response) => {
        setPlayers(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getdata("http://192.168.29.84:8000/app/icc");
  }, []);

  const handleCategoryChange = (category) => {
    setCategory(category);
    setFormat("");
    setGender("");
    setFormatSelected(true);
    if (category === "Batting") {
      getdata("http://192.168.29.84:8000/app/icc_batting/");
    } else if (category === "Bowling") {
      getdata("http://192.168.29.84:8000/app/icc_bowling/");
    } else if (category === "AllRounder") {
      getdata("http://192.168.29.84:8000/app/icc_all_rounder/");
    }
  };

  const handleFormatChange = (format) => {
    setFormat(format);
    if (category === "Batting") {
      getdata(`http://192.168.29.84:8000/app/icc_batting/?series=${format}&player__gender=`);
    } else if (category === "Bowling") {
      getdata(`http://192.168.29.84:8000/app/icc_bowling/?series=${format}&player__gender=`);
    } else if (category === "AllRounder") {
      getdata(`http://192.168.29.84:8000/app/icc_all_rounder/?series=${format}&player__gender=`);
    }
  };

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
    if (category === "Batting") {
      getdata(`http://192.168.29.84:8000/app/icc_batting/?series=${format}&player__gender=${selectedGender}`);
    } else if (category === "Bowling") {
      getdata(`http://192.168.29.84:8000/app/icc_bowling/?series=${format}&player__gender=${selectedGender}`);
    } else if (category === "AllRounder") {
      getdata(`http://192.168.29.84:8000/app/icc_all_rounder/?series=${format}&player__gender=${selectedGender}`);
    }
  };

  return (
    <div className="ranking-table">
      <h2 className="rank">Ranking Table</h2>
      <div>
        <button className="btnr" onClick={() => handleCategoryChange("Batting")}>Batting</button>
        <button className="btnr" onClick={() => handleCategoryChange("Bowling")}>Bowling</button>
        <button className="allrounder-button" onClick={() => handleCategoryChange("AllRounder")}>All Rounder</button>
      </div>

      {formatSelected && (
        <div>
          <button className="btnr" onClick={() => handleFormatChange("ODI")}>ODI</button>
          <button className="btnr" onClick={() => handleFormatChange("Test")}>Test</button>
          <button className="btnr" onClick={() => handleFormatChange("T20")}>T20</button>
        </div>
      )}

      {formatSelected && (
        <div>
          <button className="btnr" onClick={() => handleGenderChange("Male")}>Men</button>
          <button className="btnr" onClick={() => handleGenderChange("Female")}>Women</button>
        </div>
      )}

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

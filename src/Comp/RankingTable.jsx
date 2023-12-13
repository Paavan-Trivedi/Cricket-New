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
    getdata("http://192.168.29.84:8000/app/icc_batting");
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
      <h2>Ranking Table</h2>
      <div className="categorybtn">
        <button className="btnr" onClick={() => handleCategoryChange("Batting")}>Batting</button>
        <button className="btnr" onClick={() => handleCategoryChange("Bowling")}>Bowling</button>
        <button className="allrounder-button" onClick={() => handleCategoryChange("AllRounder")}>All Rounder</button>
      </div>

      {formatSelected && (
        <div className="formatbtn">
          <button className="btnrf" onClick={() => handleFormatChange("ODI")}>ODI</button>
          <button className="btnrf" onClick={() => handleFormatChange("Test")}>Test</button>
          <button className="btnrf" onClick={() => handleFormatChange("T20")}>T20</button>
        </div>
      )}

      {formatSelected && (
        <div className="genderbtn">
          <button className="btnrg" onClick={() => handleGenderChange("Male")}>Men</button>
          <button className="btnrg" onClick={() => handleGenderChange("Female")}>Women</button>
        </div>
      )}

      <div className="mainrank">
        <ul>
          <li className="tab1">Position</li>
          <li className="tab2">Series</li>
          <li className="tab3">Name</li>
          <li className="tab4">Image</li>
          <li className="tab5">Country</li>
          <li className="tab6">Gender</li>
          <li className="tab7">Rating</li>
        </ul>
        {players.map((player, index) => {
          return (
            <ul key={index} className="ranktable">
              <li className="rankingt1">{player.position}</li>
              <li className="rankingt2">{player.series}</li>
              <li className="rankingt3">{player.player.name}</li>
              <li className="rankingt4">
                <img src={player.player.image} alt="" />
              </li>
              <li className="rankingt5">{player.player.country}</li>
              <li className="rankingt6">{player.player.gender}</li>
              <li className="rankingt7">{player.rating}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default RankingTable;

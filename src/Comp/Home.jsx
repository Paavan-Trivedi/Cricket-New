import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Navbar from "./Navbar";
import RankingTable from "./RankingTable";

export default function Home() {
  const [search, setSearch] = useState("");
  const [teams, setTeams] = useState([
    {
      name: "INDIA",
      image: "India.png",
      description:
        "The Indian cricket team, a formidable force in international cricket, boasts a rich history, diverse talent, and unwavering passion.",
      link: "india",
    },
    {
      name: "New Zealand",
      image: "New Zealand.png",
      description:
        "The New Zealand cricket team, known as the Blackcaps, exhibits skill, resilience, and sportsmanship globally.",
      link: "Newzealand",
    },
    {
      name: "Australia",
      image: "Australia.jpg",
      description:
        "The Australian cricket team, embodying grit and skill, dominates the world stage with a storied legacy.",
      link: "Australia",
    },
    {
      name: "England",
      image: "England.jpg",
      description:
        "The England cricket team, a bastion of tradition and skill, epitomizes cricket excellence on the global stage.",
      link: "England",
    },
    {
      name: "South Africa",
      image: "South Africa.jpg",
      description:
        "The South Africa cricket team, Proteas, blends talent, resilience, and diversity, symbolizing cricket prowess internationally.",
      link: "SouthAfrica",
    },
    {
      name: "West Indies",
      image: "West Indies.jpg",
      description:
        "The West Indies cricket team, a vibrant blend of flair and power, has a legendary cricketing legacy.",
      link: "WestIndies",
    },
    {
      name: "Ireland",
      image: "Ireland.png",
      description:
        "The Ireland cricket team, emerging with passion and determination, contributes to cricket global landscape impressively.",
      link: "Ireland",
    },
    {
      name: "Afghanistan",
      image: "Afghanistan.png",
      description:
        "The Afghanistan cricket team, a rising force, embodies resilience and talent, making a mark on the international stage.",
      link: "Afghanistan",
    },
    {
      name: "Bangladesh",
      image: "Bangladesh.png",
      description:
        "The Bangladesh cricket team, a symbol of resilience and growing prowess, continues to make strides globally.",
      link: "Bangladesh",
    },
    {
      name: "Zimbabwe",
      image: "Zimbabwe.png",
      description:
        "The Zimbabwe cricket team, displaying resilience and spirit, contributes to the cricketing world with determination and talent.",
      link: "Zimbabwe",
    },
    {
      name: "Pakistan",
      image: "Pakistan.png",
      description:
        "The Pakistan cricket team, a powerhouse of skill and passion, commands global respect with its historic triumphs.",
      link: "Pakistan",
    },
  ]);

  return (
    <>
      <div className="main_body">
        <Navbar />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <div className="view">
          <div className="card">
            <div className="cards">
              {teams
                .filter((val) => {
                  if (search == "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((team, index) => (
                  <NavLink className="Indiateam" to={team.link} key={index}>
                    <div className="card-box">
                      <img
                        style={{ width: "200px", height: "120px" }}
                        src={team.image}
                        alt=""
                      />
                      <div className="intro">
                        <h1>{team.name}</h1>
                        <p>{team.description}</p>
                      </div>
                    </div>
                  </NavLink>
                ))}
            </div>
          </div>
          <RankingTable />
        </div>
      </div>
    </>
  );
}

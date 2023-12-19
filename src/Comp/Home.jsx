import { useState } from "react";
import { useSearchParams , useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import RankingTable from "./RankingTable";

export default function Home({onLogout}) {
  const navigate = useNavigate();
  const [searchParams,setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [teams, setTeams] = useState([
    {
      name: "INDIA",
      link: "india-6",
      image: "India.png",
      description:
        "The Indian cricket team, a formidable force in international cricket, boasts a rich history, diverse talent, and unwavering passion.",
    },
    {
      name: "New Zealand",
      link: "new-zealand-5",
      image: "New Zealand.png",
      description:
        "The New Zealand cricket team, known as the Blackcaps, exhibits skill, resilience, and sportsmanship globally.",
    },
    {
      name: "Australia",
      link: "australia-2",
      image: "Australia.jpg",
      description:
        "The Australian cricket team, embodying grit and skill, dominates the world stage with a storied legacy.",
    },
    {
      name: "England",
      link: "england-1",
      image: "England.jpg",
      description:
        "The England cricket team, a bastion of tradition and skill, epitomizes cricket excellence on the global stage.",
    },
    {
      name: "South Africa",
      link: "south-africa-3",
      image: "South Africa.jpg",
      description:
        "The South Africa cricket team, Proteas, blends talent, resilience, and diversity, symbolizing cricket prowess internationally.",
    },
    {
      name: "West Indies",
      link: "west-indies-4",
      image: "West Indies.jpg",
      description:
        "The West Indies cricket team, a vibrant blend of flair and power, has a legendary cricketing legacy.",
    },
    {
      name: "Ireland",
      link: "ireland-29",
      image: "Ireland.png",
      description:
        "The Ireland cricket team, emerging with passion and determination, contributes to cricket global landscape impressively.",
    },
    {
      name: "Afghanistan",
      link: "afghanistan-40",
      image: "Afghanistan.png",
      description:
        "The Afghanistan cricket team, a rising force, embodies resilience and talent, making a mark on the international stage.",
    },
    {
      name: "Bangladesh",
      link: "bangladesh-25",
      image: "Bangladesh.png",
      description:
        "The Bangladesh cricket team, a symbol of resilience and growing prowess, continues to make strides globally.",
    },
    {
      name: "Zimbabwe",
      link: "zimbabwe-9",
      image: "Zimbabwe.png",
      description:
        "The Zimbabwe cricket team, displaying resilience and spirit, contributes to the cricketing world with determination and talent.",
    },
    {
      name: "Pakistan",
      link: "pakistan-7",
      image: "Pakistan.png",
      description:
        "The Pakistan cricket team, a powerhouse of skill and passion, commands global respect with its historic triumphs.",
    },
  ]);

  const cardCLick = (countryName) => {
    setSearchParams("country",countryName);
    navigate(`/${countryName}`);
  }

  return (
    <>
      <div className="main_body">
        <Navbar onLogout={onLogout} />
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
                  <button className="card-box" key={index} onClick={() => cardCLick(team.link)}>
                    <div>
                      <img
                        style={{}}
                        src={team.image}
                        alt=""
                      />
                      <div className="intro">
                        <h1>{team.name}</h1>
                        <p>{team.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </div>
          <RankingTable />
        </div>
      </div>
    </>
  );
}

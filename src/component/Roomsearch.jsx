import React, { useState } from "react";
import border from "../images/border.png";
import "../App.css";
import Searchbox from "./Searchbox";

function Roomsearch() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [roomData, setroomData] = useState(null);

  async function fetchRoomData(param) {
    setLoading(true);

    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${param}&checkin=2025-01-12&checkout=2025-01-13&adults=1&children=0&infants=0&pets=0&page=1&currency=USD`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cd1ab974b6msh9e10137f8637824p185db4jsnbcc16eb701e4",
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result) {
        console.log(result);
        setroomData(result);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  async function handleSearch() {
    fetchRoomData(search);
  }

  return (
    <div className="bg-black h-screen w-full relative">
      <div className="w-full  h-[20vh] absolute top-[-7.5rem] left-0 flex overflow-hidden  mix-blend-overlay">
        <img src={border} alt="" className="w-[22rem] h-32  " />
        <img src={border} alt="" className="w-[22rem] h-32 flip " />
        <img src={border} alt="" className="w-[22rem] h-32 " />
        <img src={border} alt="" className="w-[22rem] h-32 flip" />
        <img src={border} alt="" className="w-[22rem] h-32 " />
        <img src={border} alt="" className="w-[22rem] h-32 flip" />
      </div>
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div>
          <Searchbox
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Roomsearch;

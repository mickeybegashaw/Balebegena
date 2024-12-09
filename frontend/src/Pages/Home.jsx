import { useState, useContext } from "react";
import { CITIES } from "../Cites.js";
import { MusicianContext } from "../context/musiciansContext.jsx";
import { Link } from "react-router-dom";

import axios from "axios";
const Home = () => {
  const { musicians, setMusicians } = useContext(MusicianContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const HandelAddressChange = (event) => {
    setSelectedAddress(event.target.value);
    3;
  };

  const fetchDataWithCategory = async (category) => {
    try {
      setMusicians([])
      const response = await axios.get(
        "http://localhost:3000/musician/api/category",
        {
          params: { category },
        }
      );

      setMusicians(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAll = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/musician/api/");

      setMusicians(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataWithAddress = async (address) => {
    try {
      setMusicians([])

      const response = await axios.get(
        "http://localhost:3000/musician/api/address",
        {
          params: { address },
        }
      );

      setMusicians(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataWithAddressAndCategory = async (address, category) => {
    try {
      setMusicians([])

      const response = await axios.get(
        "http://localhost:3000/musician/api/both",
        {
          params: { address, category },
        }
      );

      setMusicians(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handelSearchMusician = () => {
    if (selectedAddress && selectedCategory) {
      fetchDataWithAddressAndCategory(selectedAddress, selectedCategory);
    } else if (selectedAddress) {
      fetchDataWithAddress(selectedAddress);
    } else if (selectedCategory) {
      fetchDataWithCategory(selectedCategory);
    }
    else{
      fetchAll()
    }
  };

  return (
    <div className="home bg-[url('./assets/worship.png')]  bg-center bg-cover h-full text-neutral-50">
      <div className="homeMassage p-10 md:p-24">
        <h1 className="text-4xl uppercase font-bold md:text-4xl lg:text-5xl">
          Finding Gospel Musicians?
        </h1>
        <p className="text-lg mt-5">Search Thousands of Gospel Musicians</p>

        <div className="select  ">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="text-stone-600 h-8 mt-5 md:p-1 w-28 md:w-60 rounded "
          >
            <option value="" disabled>
              Select Category...
            </option>
            <option value="Keyboard">Keyboard</option>
            <option value="Guitar">Guitar </option>
            <option value="Drum">Drum </option>
            <option value="SaxPhone and related">SaxPhone and related </option>
            <option value="Sound System Engineer">Sound System Engineer</option>
          </select>
          <select
            value={selectedAddress}
            onChange={HandelAddressChange}
            className="text-stone-600 h-8 mt-5 md:p-1 ml-3 w-28 md:w-60 rounded"
          >
            <option value="select">City, Region</option>
            {CITIES.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          <Link to={"/search-results"}>
            <button
              onClick={handelSearchMusician}
              className="bg-red-700 uppercase font-bold active:bg-red-600 p-1 mt-1 rounded ml-2 text-xl"
            >
              Search
            </button>
          </Link>
        </div>
      </div>
      <div className="discription-container flex flex-col md:flex-row  items-center gap-10 md:gap-20 mt-24">
        <div className="discription w-full backdrop-brightness-50 p-10">
          <h2 className="font-bold text-xl text-red-700">ባለበገና</h2>
          <p className="text-l mt-1">
            ባለበገና ዌብሳይት ለክርስቲያን ሙዚቀኞች የአገልግሎት እድልን የሚከፍት እና ለቤተክርስቲያንም ሙዚቃ ተጫዋች
            ፍለጋን የሚያቀል ነው፡፡{" "}
          </p>
        </div>
        <div className="discription w-full backdrop-brightness-50 p-10">
          <h2 className="font-bold text-xl text-red-700">Join Now</h2>
          <p className="text-l mt-1">
            ክርሰቲያን ሙዚቀኞች Join now በማለት የአገልግሎት እድላችሁን ማስፋት  እንዲሁም ሌሎች ሙዚቀኞችን
            ማግኘት ትቸላላችሁ{" "}
          </p>
        </div>
        <div className="discription w-full backdrop-brightness-50 p-10">
          <h2 className="font-bold text-xl text-red-700">ባለበገና</h2>
          <p className="text-l mt-1">
            ባለበገና ዌብሳይት ለክርስቲያን ሙዚቀኞች የአገልግሎት እድልን የሚከፍት እና ለቤተክርስቲያንም ሙዚቃ ተጫዋች
            ፍለጋን የሚያቀል ነው፡፡{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useContext, useState } from "react";
import { MusicianContext } from "../context/musiciansContext.jsx";
import { SlLocationPin } from "react-icons/sl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import defaultImage from "../assets/avater.png";
import { formatDistanceToNow } from "date-fns";
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;
const SearchResults = () => {
  const navigate = useNavigate();
  const { musicians, setSelectedMusician } = useContext(MusicianContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Function to handle the selection of a musician
  const handelSelectedMusician = async (id) => {
    setLoading(true);
    try {
      const selected = await axios.get(
        `${baseUrl}/musician/api/${id}` // API to fetch musician by ID
      );
      setSelectedMusician(selected.data);
      navigate("/selected-musician");
    } catch (error) {
      setError("Failed to load musician");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-stone-400 pt-3 min-h-screen flex flex-col gap-3  items-center">
      {loading ? (
        <div className="absolute top-1/3">
          <MoonLoader color="red" />
        </div>
      ) : (
        <>
          <div className="bg-white rounded w-11/12 h-16 p-1 md:h-20">
            <h1 className="text-2xl md:text-3xl font-bold inline">
              Search Results |
            </h1>
            <span className="ml-3 text-xl md:text-2xl text-stone-500">
              {musicians.length}
            </span>
            <p className="text-stone-500">Ethiopia</p>
          </div>

          {musicians.length === 0 ? (
            <h1 className="text-xl text-center text-teal-50 font-bold">
              There are no musicians! Please try another search.
            </h1>
          ) : (
            <div className="bg-white rounded w-11/12 flex flex-wrap  justify-around p-5 gap-3 h-full">
              {musicians.map((musician) => (
                <div
                  onClick={() => handelSelectedMusician(musician._id)}
                  key={musician._id}
                  className="bg-stone-700 text-white w-full h-1/3 mb-5 md:w-1/4"
                >
                  <img
                    className="w-full h-60 object-cover"
                    src={musician.image.url || defaultImage}
                    loading="lazy"
                    alt="musician image"
                  />
                  <h2 className="bg-stone-900 font-bold text-2xl md:text-lg lg:text-2xl uppercase text-center">
                    {musician.name}
                  </h2>
                  <p className="text-xl md:text-base uppercase text-center">
                    {musician.category}
                  </p>
                  <p className="text-stone-400">
                    <span className="inline-block">
                      <SlLocationPin />
                    </span>
                    {musician.address}
                  </p>
                  <p className="text-stone-400">
                    {formatDistanceToNow(new Date(musician.createdAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;

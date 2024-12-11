import React, { useContext } from "react";
import { MusicianContext } from "../context/musiciansContext.jsx";
import { SlLocationPin } from "react-icons/sl";
import axios from "axios";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners"; // Ensure you have this import

const SearchResults = () => {
  const { musicians, setSelectedMusician, setLoading, setError, loading } =
    useContext(MusicianContext);

  // Function to handle the selection of a musician
  const handelSelectedMusician = async (id) => {
    setLoading(true);
    try {
      const selected = await axios.get(
        `http://localhost:3000/musician/api/${id}` // API to fetch musician by ID
      );
      setSelectedMusician(selected.data); // Store selected musician in context
    } catch (error) {
      setError("Failed to load musician");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="top-1/3 absolute left-1/2">
          <MoonLoader color="red" />
        </div>
      ) : (
        <div className="bg-stone-400 min-h-screen pt-3 flex flex-col gap-3 items-center">
          <div className="bg-white rounded w-11/12 h-16 p-1 md:h-20">
            <h1 className="text-2xl md:text-3xl font-bold inline">Search Results |</h1>
            <span className="ml-3 text-xl md:text-2xl text-stone-500">
              {musicians.length}
            </span>
            <p className="text-stone-500">Ethiopia</p>
          </div>

          {/** musicians list */}
          {musicians.length === 0 ? (
            <h1 className="text-xl text-center text-teal-50 font-bold">
              There are no musicians! Please try another search.
            </h1>
          ) : (
            <div className="bg-white rounded w-11/12 flex flex-wrap justify-around p-5 gap-3 h-full">
              {musicians.map((musician) => (
                <div key={musician._id} className="bg-stone-700 text-white w-full h-1/3 mb-5 md:w-1/4">
                  <Link
                    to={`/selected-musician`} // Pass the ID in the URL
                    onClick={() => handelSelectedMusician(musician._id)} // Handle musician selection
                  >
                    <img
                      className="w-full h-2/3"
                      src={musician.image.url}
                      alt="musician image"
                    />
                    <h2 className="bg-stone-900 font-bold text-2xl md:text-lg lg:text-2xl uppercase text-center">
                      {musician.name}
                    </h2>
                    <p className="text-xl md:text-base uppercase text-center">{musician.category}</p>
                    <p className="text-stone-400">
                      <span className="inline-block">
                        <SlLocationPin />
                      </span>
                      {musician.address}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchResults;

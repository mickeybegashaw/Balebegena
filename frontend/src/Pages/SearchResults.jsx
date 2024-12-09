import React, { useContext } from "react";
import { MusicianContext } from "../context/musiciansContext.jsx";
import { SlLocationPin } from "react-icons/sl";

const SearchResults = () => {
  const { musicians, setMusicians } = useContext(MusicianContext);

  return (
    <div className="bg-stone-400 min-h-screen pt-3 flex flex-col gap-3 items-center">
      <div className="bg-white rounded w-11/12  h-16 p-1 md:h-20 ">
        <h1 className="text-2xl md:text-3xl font-bold inline">
          Search Results |
        </h1>
        <span className="ml-3 text-xl md:text-2xl text-stone-500">
          {musicians.length}
        </span>
        <p className="text-stone-500">
          Ethiopia, &nbsp;
          {musicians.map((musician, index) => (
            <span key={index} className="inline">
              {musician.address}
            </span>
          ))}
        </p>
      </div>

      {/**musicians list */}
      {musicians.length == 0 ? (
        <h1 className="text-xl text-center text-teal-50 font-bold">
          There are No musicians! please try other search
        </h1>
      ) : (
        <div className="bg-white text-white  rounded w-11/12 flex flex-wrap justify-around p-5 gap-3   h-full ">
          {musicians.map((musician) => (
            <div
              key={musician._id}
              className="bg-stone-700 w-full h-1/3 mb-5 md:w-1/4"
            >
              <img
                className="w-full h-2/3"
                src={musician.image.url}
                alt="musician image"
              />
              <h2 className="bg-stone-900 font-bold text-2xl uppercase text-center">
                {musician.name}
              </h2>
              <p className="text-xl uppercase text-center">
                {musician.category}
              </p>
              <p className="text-stone-400">
                <span className="inline-block">
                  <SlLocationPin />
                </span>
                {musician.address}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;

import React, { useState } from "react";
import { CITIES } from "../Cites";

const MusicianPostingFom = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    city: "",
    instrument: "",
    yearsPlaying: "",
    description: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const generateDescription = () => {
    const { name, phoneNumber, city, instrument, yearsPlaying } = formData;

    if (!name || !phoneNumber || !city || !instrument || !yearsPlaying) {
      alert("Please fill out all fields to generate a description.");
      return;
    }

    const description = `Hello, my name is ${name}. I am a musician based in ${city}. I specialize in playing the ${instrument} and have ${yearsPlaying} years of experience. Feel free to contact me at ${phoneNumber}.`;

    setFormData({ ...formData, description });
  };

  return (
    <div className="bg-stone-400 flex flex-col min-h-screen items-center">
      <div className="bg-white rounded-lg w-10/12 h-5/6 p-10 mt-5 flex flex-col items-center">
        <h2 className="font-bold text-2xl mb-2 md:text-3xl lg:text-4xl">
          Profile Information
        </h2>
        <p className="mb-10 md:text-lg">
          Fill the information below to make a post
        </p>

        <form>
          {/* Name */}
          <label className="text-xl">
            Musician Full Name:
            <input
              className="mt-2 p-2 w-full  border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <br />

          {/* Phone Number */}
          <label className="text-xl">
            Phone Number:
            <input
              minLength={10}
              maxLength={13}
              required
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-2 p-2 w-full border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <br />
          <br />

          {/* City */}
          <label className="text-xl">
            City:
            <select
              className="mt-2 p-2 w-full border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="" disabled>
                City, Region
              </option>
              {CITIES.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
          <br />
          <br />

          {/* Instrument */}
          <label className="text-xl">
            Instruments Played:
            <select
              required
              name="instrument"
              value={formData.instrument}
              onChange={handleChange}
              className="mt-2 p-2 w-full border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Category...
              </option>
              <option value="Keyboard">Keyboard</option>
              <option value="Guitar">Guitar</option>
              <option value="Drum">Drum</option>
              <option value="Saxophone and related">
                Saxophone and related
              </option>
              <option value="Sound System Engineer">
                Sound System Engineer
              </option>
            </select>
          </label>
          <br />
          <br />

          {/* Years of Playing */}
          <label className="text-xl">
            Years Playing Music:
            <input
              required
              min={0}
              max={30}
              type="number"
              name="yearsPlaying"
              value={formData.yearsPlaying}
              onChange={handleChange}
              className="mt-2 p-2 w-full border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <br />
          <br />

          {/* Description */}
          <label className="text-xl">
            Description about yourself:
            <textarea
            required
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-2 p-2 w-full resize-none h-52 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </label>
            {/* Generate Description Button */}
            <button
            type="button"
            onClick={generateDescription}
            className="bg-blue-500 text-white px-2  rounded-md hover:bg-blue-600"
          >
            Generate Description
          </button>
          <br />
          <br />

          {/* Profile Picture */}
          <label className="text-xl">
            Profile Picture:
            <input
              className="mt-2 p-2 w-full border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
          <br />
          <br />

        
        </form>
      </div>
    </div>
  );
};

export default MusicianPostingFom;

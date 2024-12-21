import React, { useState } from "react";
import { CITIES } from "../Cites";
import axios from "axios";

const MusicianPostingFom = () => {
  const [error ,setError]=useState(null)
  const [loading , setLoading] = useState(false)
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
    const file = e.target.files[0];
    const maxSizeInBytes = 2 * 1024 * 1024; 
  
    if (file && file.size > maxSizeInBytes) {
      setError("File size exceeds 2MB. Please upload a smaller image.");
      setFormData({ ...formData, profilePicture: null }); 
    } else {
      setError(null);
      setFormData({ ...formData, profilePicture: file });
    }
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

  const handelPostSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setLoading(true)
      // Create a FormData object to send both regular fields and the image
      const formDataToSend = new FormData();
  
      // Append form data
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("address", formData.city);
      formDataToSend.append("category", formData.instrument);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("yearsPlayingMusic", formData.yearsPlaying);
  
      // Append the image (profile picture)
      if (formData.profilePicture) {
        formDataToSend.append("profilePicture", formData.profilePicture);
      } else {
        setError("Please upload a profile picture.");
        return;
      }
  
      // Send the POST request with the FormData object
      const response = await axios.post("http://localhost:3000/musician/api/", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",  // Set content type to multipart/form-data
        },
      });
  
      // Check for success
      if (response.status >= 200 && response.status < 300) {
        alert("Post successfully submitted!");
      } else {
        setError("There was an error submitting your post.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while submitting your post.");
    }
    finally{
      setLoading(false)
    }
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

        <form onSubmit={handelPostSubmit}>
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
              className="mt-2 p-2 w-full border-2 text-stone-500 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="" disabled>
                City, Region
              </option>
              {CITIES.map((city, index) => (
                <option className="text-stone-900  text-base" key={index} value={city}>
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
              className="mt-2 p-2 w-full border-2 text-stone-500 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Category...
              </option>
              <option className="text-stone-900 text-base" value="Keyboard">Keyboard</option>
              <option className="text-stone-900 text-base" value="Guitar">Guitar</option>
              <option className="text-stone-900 text-base" value="Drum">Drum</option>
              <option className="text-stone-900 text-base" value="Saxophone and related">
                Saxophone and related
              </option>
              <option className="text-stone-900 text-base" value="Sound System Engineer">
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
            Profile Picture:(max: 2MB)
            <input
            required
              className="mt-2 p-2 w-full border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
          <br />
          <br />
      <p className="text-red-700">{error}</p>
        <button disabled={loading} type="submit" className={`text-white mt-5 p-2 text-3xl rounded-lg w-full ${loading? "cursor-not-allowed bg-stone-600":" bg-red-700 hover:bg-red-600"}`}>{loading?"Processing... ":"Post"}</button>
        </form>
      </div>
    </div>
  );
};

export default MusicianPostingFom;

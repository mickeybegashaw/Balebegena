import Musician from "../model/musician.model.js"
import cloudinary from "../utils/cloudinaryConfig.js";


// creating a new musician
const createNewMusicaian = async (req, res) => {
  const { name, phonenumber, address, catagory } = req.body;
  
  // Check for required fields
  if (!name || !phonenumber || !address || !catagory) {
    return res.status(400).json("Please enter all required fields");
  }

  let imageUrl = null;
  if (req.file) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "Musicians", // Optional: specify a folder in Cloudinary
      });
      imageUrl = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    } catch (error) {
      console.error(error);
      return res.status(500).json("Error uploading image to Cloudinary");
    }
  }

  try {
    // Create musician with or without the image
    const musician = await Musician.create({
      name,
      phonenumber,
      address,
      catagory,
      image: imageUrl, // Save image URL and public_id if an image exists
    });

    res.status(200).json(musician); // Send back the created musician
  } catch (error) {
    console.error(error);
    res.status(500).json("Could not save musician properly");
  }
};


// GET route to adress filter musicians by address
const getAdressFIlterdMusician=async(req, res) => {
  const { address } = req.query;  // Get address from query parameters

  if (!address) {
    return res.status(400).json("Address is required to filter musicians.");
  }

  try {
    // Find musicians whose address matches the query address
    const musicians = await Musician.find({ address: address });

    if (musicians.length === 0) {
      return res.status(404).json("No musicians found with the specified address.");
    }

    res.status(200).json(musicians);
  } catch (error) {
    console.error(error);
    res.status(500).json("Error fetching musicians.");
  }
};




// GET route to catagory filter musicians by address
const getCatagoryFIlterdMusician=async(req, res) => {
  const { catagory } = req.query;  // Get address from query parameters

  if (!catagory) {
    return res.status(400).json("catagory is required to filter musicians.");
  }

  try {
    // Find musicians whose address matches the query address
    const musicians = await Musician.find({ catagory: catagory });

    if (musicians.length === 0) {
      return res.status(404).json("No musicians found with the specified catagory.");
    }

    res.status(200).json(musicians);
  } catch (error) {
    console.error(error);
    res.status(500).json("Error fetching musicians.");
  }
};




// GET route to filter musicians by both category and address
const getCategoryAndAddressFilteredMusician = async (req, res) => {
  const { category, address } = req.query;  // Get category and address from query parameters

  if (!category || !address) {
    return res.status(400).json("Both category and address are required to filter musicians.");
  }

  try {
    // Find musicians whose category and address match the query parameters
    const musicians = await Musician.find({ category: category, address: address });

    if (musicians.length === 0) {
      return res.status(404).json("No musicians found with the specified category and address.");
    }

    res.status(200).json(musicians);
  } catch (error) {
    console.error(error);
    res.status(500).json("Error fetching musicians.");
  }
};




//get all musicians
const getAllMusicians= async(req,res)=>{
  try{
    const musician =await Musician.find()
    res.status(200).json(musician)
  }
  catch(error){
    console.error(error)
    res.status(500).json("Can not get Musicains")
  }
}



export {createNewMusicaian,
  getAdressFIlterdMusician,
  getAllMusicians,
  getCatagoryFIlterdMusician,
  getCategoryAndAddressFilteredMusician}
import Musician from "../model/musician.model.js"
import cloudinary from "../utils/cloudinaryConfig.js";


// creating a new musician
const createNewMusician = async (req, res) => {
  const { name, phoneNumber, address, category } = req.body;
  
  if (!name || !phoneNumber || !address || !category) {
    return res.status(400).json("Please enter all required fields");
  }

  let imageUrl = null;
  if (req.file) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "Musicians", 
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
    const musician = await Musician.create({
      name,
      phoneNumber,
      address,
      category,
      image: imageUrl, 
    });

    res.status(200).json(musician); 
  } catch (error) {
    console.error(error);
    res.status(500).json("Could not save musician properly");
  }
};


// GET route to address filter musicians by address
const getAddressFilteredMusician=async(req, res) => {
  const { address } = req.query;  // Get address from query parameters

  if (!address) {
    return res.status(400).json("Address is required to filter musicians.");
  }

  try {
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




// GET route to category filter musicians by address
const getCategoryFilteredMusician=async(req, res) => {
  const { category } = req.query; 

  if (!category) {
    return res.status(400).json("category is required to filter musicians.");
  }

  try {
    const musicians = await Musician.find({ category: category });

    if (musicians.length === 0) {
      return res.status(404).json("No musicians found with the specified category.");
    }

    res.status(200).json(musicians);
  } catch (error) {
    console.error(error);
    res.status(500).json("Error fetching musicians.");
  }
};



//category and address filter
const getCategoryAndAddressFilteredMusician = async (req, res) => {
  const { category, address } = req.query;  

  if (!category || !address) {
    return res.status(400).json("Both category and address are required to filter musicians.");
  }

  try {
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
    res.status(500).json("Can not get Musicians")
  }
}



export {createNewMusician,
  getAddressFilteredMusician,
  getAllMusicians,
  getCategoryFilteredMusician,
  getCategoryAndAddressFilteredMusician}
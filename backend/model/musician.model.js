import mongoose from 'mongoose';

const MusicianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // image: { 
  //   type: Buffer,  // Storing image as binary data (Buffer)
  //   required: true 
  // },
  address: {
    type: String,
    required: true,
  },
  catagory:{
    type:String,
    required:true
  },
  phonenumber: {
    type: Number,
    required: true,
  }
},{timestamps:true});

// Creating the model
const Musician = mongoose.model('Musician', MusicianSchema);

export default Musician;

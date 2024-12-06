import mongoose from 'mongoose';

const MusicianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

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
  },
  image:{
    public_id:{
      type:String,
    },
    url:{
      type:String,
    }
  }
},{timestamps:true});

// Creating the model
const Musician = mongoose.model('Musician', MusicianSchema);

export default Musician;

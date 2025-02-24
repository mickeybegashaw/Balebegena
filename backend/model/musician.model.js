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
  category:{
    type:String,
    required:true
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  yearsPlayingMusic: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
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

const Musician = mongoose.model('Musician', MusicianSchema);

export default Musician;

import express from "express";
import { createNewMusicaian,getAdressFIlterdMusician, getCatagoryFIlterdMusician,getAllMusicians,getCategoryAndAddressFilteredMusician} from "../controller/musicianController.js";


const router = express.Router();

router.post("/",createNewMusicaian );
router.get("/",getAdressFIlterdMusician );//filtered by adress
router.get("/catagory",getCatagoryFIlterdMusician );//filtered by catagory
router.get("/both",getCategoryAndAddressFilteredMusician );//filtered by catagory & adress
router.get("/",getAllMusicians );

export default router;

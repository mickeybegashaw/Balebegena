import express from "express";
import multer from "multer";
import { createNewMusicaian,
        getAdressFIlterdMusician,
        getCatagoryFIlterdMusician,
        getAllMusicians,
        getCategoryAndAddressFilteredMusician} from "../controller/musicianController.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post('/', upload.single('image'), createNewMusicaian);
router.get("/address",getAdressFIlterdMusician );//filtered by adress
router.get("/catagory",getCatagoryFIlterdMusician );//filtered by catagory
router.get("/both",getCategoryAndAddressFilteredMusician );//filtered by catagory & adress
router.get("/",getAllMusicians );

export default router;

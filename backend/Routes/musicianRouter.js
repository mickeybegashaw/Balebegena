import express from "express";
import multer from "multer";
import { createNewMusician,
        getAddressFilteredMusician,
        getCategoryFilteredMusician,
        getAllMusicians,
        getCategoryAndAddressFilteredMusician,
        getSpecificMusicians} from "../controller/musicianController.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

//post musicians
router.post('/', upload.single('image'), createNewMusician);

//get the address filtered musician
router.get("/address",getAddressFilteredMusician );

//get the category filtered musician
router.get("/category",getCategoryFilteredMusician );

//get the category and address filtered musician
router.get("/both",getCategoryAndAddressFilteredMusician );

//get the all musician
router.get("/",getAllMusicians ); 

//get the specific  musician
router.get("/:id",getSpecificMusicians );

export default router;

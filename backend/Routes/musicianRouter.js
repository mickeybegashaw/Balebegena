import express from "express";
import multer from "multer";
import { createNewMusician,
        getAddressFilteredMusician,
        getCategoryFilteredMusician,
        getAllMusicians,
        getCategoryAndAddressFilteredMusician} from "../controller/musicianController.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post('/', upload.single('image'), createNewMusician);
router.get("/address",getAddressFilteredMusician );//filtered by address
router.get("/category",getCategoryFilteredMusician );//filtered by category
router.get("/both",getCategoryAndAddressFilteredMusician );//filtered by category & address
router.get("/",getAllMusicians );

export default router;

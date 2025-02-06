import { Router } from "express";
import { uploadData, uploadImages } from "../controllers/listing.controller.js";
import multer from "multer";
import Listing from "../models/listing.model.js";

const router = Router();

// Multer storage configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, "uploads/"),
//     filename: (req, file, cb) => cb(null, file.originalname),
// });
const storage = multer.memoryStorage();
const upload = multer({ storage });

// retrieves all listing stored in the database
router.get("/all", async (req, res) => {
    const listings = await Listing.find({});
    res.json(listings);
});

// creates a listing in the database with listing details
router.post("/create/data", uploadData);

// adds images to a particular listing
router.post("/create/images", upload.array("images", 10), uploadImages);

export default router;

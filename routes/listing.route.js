import { Router } from "express";
import { uploadData, uploadImages } from "../controllers/listing.controller.js";
import multer from "multer";
import Listing from "../models/listing.model.js";

const router = Router();

// multer configuration
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

// retrieves a particular listing from the database
router.get("/:lid", async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.lid);
        if (!listing) {
            return res.status(404).json({ message: "Listing not found!" });
        }
        res.json(listing);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;

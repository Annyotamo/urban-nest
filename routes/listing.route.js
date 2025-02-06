import { Router } from "express";
import { uploadData, uploadImages } from "../controllers/listing.controller.js";
import multer from "multer";
import Listing from "../models/listing.model.js";

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

const router = Router();

router.get("/all", async (req, res) => {
    const listings = await Listing.find({});
    res.json(listings);
});

router.post("/create/images", upload.array("images", 10), uploadImages);

router.post("/create/data", uploadData);

export default router;

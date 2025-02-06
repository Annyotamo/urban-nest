import { Router } from "express";
import { createListing } from "../controllers/listing.controller.js";
import Listing from "../models/listing.model.js";

const router = Router();

router.get("/all", async (req, res) => {
    const listings = await Listing.find({});
    res.json(listings);
});

router.post("/create", createListing);

export default router;

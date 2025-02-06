import Listing from "../models/listing.model.js";

export async function createListing(req, res) {
    if (req.body === null) {
        return res.status(400).json({ message: "No data provided..." });
    }
    const newListing = new Listing({
        ...req.body,
        images: "working on it",
    });

    try {
        await newListing.save();
        res.status(201).json({ message: "Listing successfully created..." });
    } catch (error) {
        console.error("Error creating listing:", error);
        res.status(500).json({ message: "Error creating listing...", error });
    }
}

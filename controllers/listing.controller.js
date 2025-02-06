import { v2 as Cloudinary } from "cloudinary";
import dotenv from "dotenv";
import Listing from "../models/listing.model.js";

dotenv.config();

Cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImages(req, res) {
    if (req.files === null) {
        return res.status(400).json({ message: "No file uploaded..." });
    }
    const collectionId = req.headers["x-collection-id"];
    console.log(collectionId);

    req.files.map(async (item) => {
        const result = await Cloudinary.uploader.upload(`./${item.path}`, {
            resource_type: "image",
            folder: "urban-nest",
        });
        await Listing.findByIdAndUpdate(collectionId, { $push: { images: result.secure_url } });
    });
    res.json({ message: "Images uploaded successfully..." });
}

export async function uploadData(req, res) {
    if (req.body === null) {
        return res.status(400).json({ message: "No data provided..." });
    }

    const newListing = new Listing({
        ...req.body,
        images: [""],
    });

    try {
        const listingId = await newListing.save();
        console.log(listingId);
        res.status(201).json({ message: "Data successfully uploaded", id: listingId._id });
    } catch (error) {
        res.status(500).json({ message: "Error creating uploading data", error });
    }
}

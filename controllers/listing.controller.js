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

    try {
        // uploading all images url to cloudinary
        await Promise.all(
            req.files.map((item) => {
                return new Promise((resolve, reject) => {
                    const uploadStream = Cloudinary.uploader.upload_stream(
                        { resource_type: "image", folder: "urban-nest" },
                        async (error, result) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            // updating the database with the image url
                            try {
                                const url = result.secure_url;
                                await Listing.findByIdAndUpdate(collectionId, { $push: { images: url } });
                                resolve();
                            } catch (dbError) {
                                // if there is an error updating the database
                                reject(dbError);
                            }
                        }
                    );
                    uploadStream.end(item.buffer);
                });
            })
        );

        res.json({ message: "Images uploaded successfully" });
    } catch (e) {
        res.status(500).json({ message: "Image upload to cloudinary failed" });
    }
}

export async function uploadData(req, res) {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    if (req.body === null) {
        return res.status(400).json({ message: "No data provided..." });
    }

    const newListing = new Listing({
        ...req.body,
        images: [],
    });

    try {
        const listingId = await newListing.save();
        res.status(201).json({ message: "Data successfully uploaded", id: listingId._id });
    } catch (error) {
        res.status(500).json({ message: "Error creating uploading data", error });
    }
}

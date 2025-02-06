import { body, validationResult } from "express-validator";

const validateListing = [
    // Validate 'category'
    body("category")
        .isArray({ min: 1 })
        .withMessage("Category must be a non-empty array of strings")
        .custom((value) => {
            if (!value.every((item) => typeof item === "string")) {
                throw new Error("Each category must be a string");
            }
            return true;
        }),

    // Validate 'location'
    body("location")
        .isObject()
        .withMessage("Location must be an object")
        .custom((value) => {
            if (!value.country || typeof value.country !== "string") {
                throw new Error("Location must include a valid 'country' string");
            }
            if (!Array.isArray(value.latlng) || value.latlng.length !== 2) {
                throw new Error("Location must include a valid 'latlng' array of two numbers");
            }
            if (!value.latlng.every((coord) => typeof coord === "number")) {
                throw new Error("'latlng' must only contain numbers");
            }
            return true;
        }),

    // Validate 'image'
    body("image")
        .isObject()
        .withMessage("Image must be an object")
        .custom((value) => {
            if (!value.name || typeof value.name !== "string") {
                throw new Error("Image must include a valid 'name' string");
            }
            if (!value.preview || typeof value.preview !== "string") {
                throw new Error("Image must include a valid 'preview' string");
            }
            if (typeof value.size !== "number" || value.size <= 0) {
                throw new Error("Image 'size' must be a positive number");
            }
            if (!value.type || typeof value.type !== "string" || !value.type.startsWith("image/")) {
                throw new Error("Image 'type' must be a valid image MIME type");
            }
            return true;
        }),

    // Validate 'details'
    body("details")
        .isObject()
        .withMessage("Details must be an object")
        .custom((value) => {
            if (!value.Title || typeof value.Title !== "string") {
                throw new Error("Details must include a valid 'Title' string");
            }
            if (typeof value.price !== "number" || value.price <= 0) {
                throw new Error("'price' must be a positive number");
            }
            if (!value.description || typeof value.description !== "string") {
                throw new Error("'description' must be a valid string");
            }
            return true;
        }),

    // Validate 'facilities'
    body("facilities")
        .isObject()
        .withMessage("Facilities must be an object")
        .custom((value) => {
            if (typeof value.rooms !== "number" || value.rooms <= 0) {
                throw new Error("'rooms' must be a positive number");
            }
            if (typeof value.baths !== "number" || value.baths <= 0) {
                throw new Error("'baths' must be a positive number");
            }
            if (typeof value.pets !== "boolean") {
                throw new Error("'pets' must be a boolean value");
            }
            if (!Array.isArray(value.more) || value.more.length === 0) {
                throw new Error("'more' must be a non-empty array");
            }
            if (!value.more.every((item) => typeof item === "string")) {
                throw new Error("Each item in 'more' must be a string");
            }
            return true;
        }),

    // Middleware to check validation results
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

export default validateListing;

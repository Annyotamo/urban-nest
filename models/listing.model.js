import { Schema, model } from "mongoose";

const listingSchema = new Schema(
    {
        details: {
            title: { type: String, required: true },
            price: { type: Number, required: true },
            description: { type: String },
        },
        location: {
            country: { type: String },
            latLng: { type: [Number], required: true },
        },
        category: [{ type: String }],
        facilities: {
            rooms: { type: Number, required: true },
            baths: { type: Number, required: true },
            pets: { type: Boolean, default: false },
            more: [{ type: String }],
        },
        images: String,
    },
    { timestamps: true }
);

export default model("Listing", listingSchema);

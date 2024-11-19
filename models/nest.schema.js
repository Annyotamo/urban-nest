import { Schema, model } from "mongoose";

const nestSchema = new Schema(
    {
        location: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        guests: {
            type: Number,
            required: true,
        },
        facilities: {
            type: Object,
            required: true,
        },
        pets: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

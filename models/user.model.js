import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        bookings: {
            type: [Schema.Types.ObjectId],
            ref: "Booking",
        },
        favourites: {
            type: [Schema.Types.ObjectId],
            ref: "Listing",
        },
    },
    { timestamps: true }
);

export default model("User", userSchema);

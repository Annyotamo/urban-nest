import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
    {
        user: {
            name: { required: true, type: String },
            uid: { type: Schema.Types.ObjectId, ref: "User", required: true },
        },
        listing: { type: Schema.Types.ObjectId, ref: "Listing", required: true },
        date: {
            start: { type: Schema.Types.Date, required: true },
            end: { type: Schema.Types.Date, required: true },
        },
        guests: [
            {
                firstName: {
                    type: String,
                    required: true,
                },
                lastName: {
                    type: String,
                    required: true,
                },
                Country: {
                    type: String,
                    required: true,
                },
                age: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    { timestamps: true }
);

export default new model("Booking", bookingSchema);

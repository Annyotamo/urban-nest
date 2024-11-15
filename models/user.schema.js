import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        name: {},
        username: {},
        email: {},
        password: {},
    },
    { timestamps: true }
);

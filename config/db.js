import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "urban-nest",
        });
        console.log(`Connected to database: ${conn.connection.host}`);
    } catch (e) {
        console.log("Internal error:", e);
    }
}

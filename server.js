import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT;
const server = express();

await connectDB();

server.get("/", (req, res) => res.sendStatus(200));

server.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

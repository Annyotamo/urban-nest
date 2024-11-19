import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import loginRegisterRouter from "./routes/loginReg.route.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;
const server = express();

await connectDB();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// routes
server.use("/api/auth", loginRegisterRouter);

server.get("/", (req, res) => res.sendStatus(200));

server.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

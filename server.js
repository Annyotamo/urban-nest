import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // Import the utility function
import { dirname } from "path";

import loginRegisterRouter from "./routes/loginReg.route.js";
import listingRouter from "./routes/listing.route.js";
import bookingRouter from "./routes/booking.route.js";
import userRouter from "./routes/user.route.js";

import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import session from "express-session";
import passport from "passport";

dotenv.config();

const PORT = process.env.PORT;
const server = express();

await connectDB();

// Enabling cross connection establishment
const allowedOrigins = ["http://localhost:3000", "http://localhost:8080"];
server.use(
    cors({
        credentials: true,
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
    })
);

// For the parsing data from the req body
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// session middleware
server.use(
    session({
        secret: process.env.SESSION_SECRET,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 60 * 1000 * 60 * 24,
        },
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            client: mongoose.connection.client,
            dbName: "urban-nest",
        }),
    })
);

// passport js (local)
server.use(passport.initialize());
server.use(passport.session()); // attaching to the session

// routes
server.use("/api/auth", loginRegisterRouter);
server.use("/api/listing", listingRouter);
server.use("/api/booking", bookingRouter);
server.use("/api/user", userRouter);
server.use("/api/test", (req, res) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized!" });
    res.json({ message: "Success!", user: req.user });
});

const __filename = fileURLToPath(import.meta.url); // Get the current file's path
const __dirname = dirname(__filename);
// serving my react app
// Serve static files from the React app (adjust path)
server.use(express.static(path.join(__dirname, "frontend", "dist"))); // <--- Key change

// The "catchall" handler to send back index.html on all unmatched requests (adjust path)
server.get("/*", (req, res) => {
    // <--- Important for React Router
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html")); // <--- Correct path
});

server.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

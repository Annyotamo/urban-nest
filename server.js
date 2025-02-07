import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import loginRegisterRouter from "./routes/loginReg.route.js";
import listingRouter from "./routes/listing.route.js";
import cors from "cors";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";

dotenv.config();

const PORT = process.env.PORT;
const server = express();

await connectDB();

// Enabling cross connection establishment
server.use(cors({ credentials: true, origin: "http://localhost:3000" }));

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
            maxAge: 60 * 1000 * 30,
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
server.use("/api/test", (req, res) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized!" });
    res.json({ message: "Success!" });
});

server.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

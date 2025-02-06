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
server.use(cors());

// For the parsing data from the req body
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// session middleware
server.use(
    session({
        secret: process.env.SESSION_SECRET,
        cookie: {
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

server.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

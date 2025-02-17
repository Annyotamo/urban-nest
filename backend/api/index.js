import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import session from "express-session";
import passport from "passport";

import connectDB from "../config/db.js";
import loginRegisterRouter from "../routes/loginReg.route.js";
import listingRouter from "../routes/listing.route.js";
import bookingRouter from "../routes/booking.route.js";
import userRouter from "../routes/user.route.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

await connectDB();

const allowedOrigins = ["http://localhost:3000", "http://localhost:8080", "https://urbn-nest.vercel.app/"];
app.use(
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session middleware
app.use(
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
app.use(passport.initialize());
app.use(passport.session()); // attaching to the session

// routes
app.get("/", (req, res) => {
    res.send("Api working!");
});
app.use("/api/auth", loginRegisterRouter);
app.use("/api/listing", listingRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/user", userRouter);
app.use("/api/test", (req, res) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized!" });
    res.json({ message: "Success!", user: req.user });
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

export default app;

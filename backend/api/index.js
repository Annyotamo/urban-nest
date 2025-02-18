import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";

import connectDB from "../config/db.js";
import loginRegisterRouter from "../routes/loginReg.route.js";
import listingRouter from "../routes/listing.route.js";
import bookingRouter from "../routes/booking.route.js";
import userRouter from "../routes/user.route.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

await connectDB();

const allowedOrigins = ["http://localhost:3000", "http://localhost:8080", "https://urbn-nest.vercel.app"];

// app.options(
//     "/api/auth/status",
//     cors({
//         credentials: true,
//         origin: "https://urbn-nest.vercel.app", // Your frontend origin
//         methods: ["GET"], // Allowed methods for this route
//         allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization", "Cookie"], // Include Cookie
//     })
// );

app.use(
    cors({
        credentials: true,
        origin: ["https://urbn-nest.vercel.app"],
        allowedHeaders: ["Origin", "X-Requested-With, Content-Type, Accept, Authorization, Cookie"],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    })
);

// For the parsing data from the req body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parsing all cookies
app.use(cookieParser());

// session middleware
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        cookie: {
            secure: true,
            httpOnly: true,
            maxAge: 60 * 1000 * 60 * 24,
            sameSite: "none",
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

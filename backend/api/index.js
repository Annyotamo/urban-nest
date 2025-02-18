import express from "express";
import dotenv from "dotenv";
import cors from "cors";
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
const allowedMethods = ["GET", "POST", "PUT", "DELETE", "PATCH"]; // Define your allowed methods
const allowedHeaders = ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization", "Cookie"]; // Include Cookie

const corsOptionsDelegate = (req, callback) => {
    const origin = req.header("Origin");

    if (allowedOrigins.includes(origin) || !origin) {
        const corsOptions = {
            credentials: true,
            origin: origin || "*", // Use origin or * if no origin (for Postman)
            methods: allowedMethods,
            allowedHeaders: allowedHeaders,
        };
        callback(null, corsOptions);
    } else {
        callback(new Error("Not allowed by CORS"));
    }
};

const corsMiddleware = cors(corsOptionsDelegate);

// CORS for OPTIONS requests (MUST BE BEFORE OTHER MIDDLEWARE AND ROUTES)
app.use(corsMiddleware); // Use the delegate for all requests
app.options("*", corsMiddleware); // This handles the OPTIONS preflight

// Other middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        cookie: {
            secure: true, // Absolutely essential for SameSite=None
            httpOnly: true,
            maxAge: 60 * 1000 * 60 * 24,
            sameSite: "none", // Must be "none" for cross-site
            domain: ".vercel.app", // Important: Dot prefix for subdomains
        },
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            client: mongoose.connection.client,
            dbName: "urban-nest",
        }),
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes (AFTER CORS AND OTHER MIDDLEWARE)
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

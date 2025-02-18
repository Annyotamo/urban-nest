import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

import loginRegisterRouter from "./routes/loginReg.route.js";
import listingRouter from "./routes/listing.route.js";
import bookingRouter from "./routes/booking.route.js";
import userRouter from "./routes/user.route.js";

import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import session from "express-session";
import passport from "passport";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

await connectDB();

app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        cookie: {
            secure: true,
            httpOnly: true,
            maxAge: 60 * 1000 * 60 * 24,
            domain: "https://urbn-nest-server.vercel.app",
            sameSite: "none",
        },
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            client: mongoose.connection.getClient(),
            dbName: "urban-nest",
        }),
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => res.send("MERN backend running on Vercel!"));
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

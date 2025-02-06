import express from "express";
import { registerUser } from "../controllers/register.controller.js";
import passport from "passport";
import "../strategy/local.strategy.js";

const router = express.Router();

router.post("/register", registerUser);
router.post(
    "/login",
    passport.authenticate("local", {
        failureMessage: true,
    }),
    (req, res) => res.json({ message: "Login successful", user: req.session }),
    (err, req, res, next) => {
        console.error("Authentication error:", err);
        res.status(401).json({ message: err.message || "Authentication failed" });
    }
);

export default router;

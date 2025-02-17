import express from "express";
import { registerUser } from "../controllers/register.controller.js";
import passport from "passport";
import "../strategy/local.strategy.js";
import User from "../models/user.model.js";

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

router.post("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error("Logout error:", err);
            return res.status(500).json({ message: "Logout failed" });
        }

        req.session.destroy((err) => {
            // Destroy the session in the store
            if (err) {
                console.error("Session destroy error:", err);
                return res.status(500).json({ message: "Logout failed" });
            }
            res.clearCookie("connect.sid");
            res.json({ message: "Logout successful" });
        });
    });
});

router.get("/status", async (req, res) => {
    if (req.user) {
        const user = await User.findById(req.user.uid);
        res.json({
            isAuthenticated: true,
            user: {
                uid: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
        });
    } else {
        res.json({ isAuthenticated: false });
    }
});

export default router;

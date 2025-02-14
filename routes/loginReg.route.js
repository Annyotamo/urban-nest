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
            console.log("ok");
            res.json({ message: "Logout successful" });
        });
    });
});

router.get("/status", (req, res) => {
    console.log(req.user);
    if (req.isAuthenticated()) {
        res.json({ isAuthenticated: true, user: req.user }); // User is logged in, send user data if needed
    } else {
        res.json({ isAuthenticated: false }); // User is not logged in
    }
});

export default router;

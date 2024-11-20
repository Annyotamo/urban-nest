import express from "express";
import { registerUser } from "../controllers/register.controller.js";
import passport from "passport";
import { loginUser } from "../controllers/login.controller.js";
import "../strategy/local.strategy.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", passport.authenticate("local"), loginUser);

export default router;

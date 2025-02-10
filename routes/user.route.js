import { Router } from "express";
import { getUserBookings } from "../controllers/user.controller.js";

const router = Router();

router.get("/bookings", getUserBookings);
router.get("/favourites");
router.get("/profile");

export default router;

import { Router } from "express";
import { createBooking, getBookings } from "../controllers/booking.controller.js";

const router = Router();

router.post("/create", createBooking);
router.get("/all", getBookings);
router.get("/:uid");

export default router;

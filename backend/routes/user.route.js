import { Router } from "express";
import { getFavourites, getUserBookings, setFavourite } from "../controllers/user.controller.js";

const router = Router();

router.get("/bookings", getUserBookings);
router.post("/favourites", setFavourite);
router.get("/favourited/all", getFavourites);
router.get("/profile");

export default router;

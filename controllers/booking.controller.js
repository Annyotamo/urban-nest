import Booking from "../models/booking.model.js";
import User from "../models/user.model.js";

export async function createBooking(req, res) {
    if (!req.user) return res.status(401).json({ message: "[Unauthorized] Login to create a booking." });
    if (!req.body || req.body.date.start == null || req.body.date.end == null || req.body.guests.length < 0)
        return res.status(400).json({ message: "[Invalid] Enter booking details to proceed." });
    try {
        const newBooking = new Booking({
            user: { name: req.user.name, uid: req.user.uid },
            listing: req.body.lid,
            date: req.body.date,
            guests: req.body.guests,
        });
        const { _id } = await newBooking.save();
        await User.findByIdAndUpdate(req.user.uid, { $push: { bookings: _id } });
        return res.status(201).json({ message: "[Success] Booking successfully generated." });
    } catch (e) {
        console.log("[Server error] Failed to register booking in database:\n", e);
        res.status(500).json({ message: "[Server error] Failed to register booking." });
    }
}

export async function getBookings(req, res) {
    const allBooking = await Booking.find({});
    res.json(allBooking);
}

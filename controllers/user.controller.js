import User from "../models/user.model.js";
import Booking from "../models/booking.model.js";
import Listing from "../models/listing.model.js";
export async function getUserBookings(req, res) {
    if (!req.user) return res.status(401).json({ message: "[Unauthorized] Login to view your bookings." });
    const userId = req.user.uid;
    const { bookings } = await User.findById(userId);
    const listings = await Promise.all(
        bookings.map(async (bid) => {
            const { listing: lid, date } = await Booking.findById(bid);
            const {
                details: { title },
                location,
                images,
            } = await Listing.findById(lid);
            return {
                date,
                title,
                location,
                images,
            };
        })
    );
    console.log(listings);
    return res.json(listings);
}

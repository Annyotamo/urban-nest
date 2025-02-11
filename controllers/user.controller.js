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

export async function setFavourite(req, res) {
    if (!req.user) res.status(401).json({ message: "[Unauthorized] Please login to favourite this property" });
    if (!req.body) res.status(400).json({ message: "[Invalid] No property selected as favourite" });
    const { lid: listingId, status } = req.body;
    status
        ? await User.findByIdAndUpdate(req.user.uid, { $push: { favourites: listingId } })
        : await User.findByIdAndUpdate(req.user.uid, { $pull: { favourites: listingId } });
    res.status(201).json({ message: "[Success] Property favourited" });
}

export async function getFavourites(req, res) {
    if (!req.user) return res.status(401).json({ message: "[Unauthorized] Please login to favourite this property" });
    const { favourites: listings } = await User.findById(req.user.uid);
    const favourites = await Promise.all(
        listings.map(async (listingId) => {
            return await Listing.findById(listingId);
        })
    );
    res.json(favourites);
}

import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBed, FaBath, FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ImageCarousal from "../components/elements/ImageCarousal";
import LoadingOverlay from "../components/elements/LoadingOverlay";
import Navbar from "../components/navbar/Navbar";
import LoginPromtOverlay from "../components/elements/LoginPromtOverlay"

const UserFavourites = () => {
    const { data: favourites = [], isLoading, isError } = useQuery({
        queryKey: ["Favourites"],
        queryFn: async () =>
            (await axios.get("http://localhost:8080/api/user/favourited/all", { withCredentials: true })).data,
        retry: false,
    });

    if (isLoading)
        return (
            <LoadingOverlay message="Fetching your favourites" isLoading={isLoading} />
        );

    if (isError)
        return (
            <LoginPromtOverlay message="view your favourites" />
        );

    return (
        <div className="bg-[#FAF3E0]">
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-6">Your Favourite Properties</h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {favourites.map((listing, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white shadow-lg rounded-2xl overflow-hidden"
                        >
                            {/* Image Carousel */}
                            <ImageCarousal images={listing.images} />

                            {/* Listing Details */}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
                                <div className="flex items-center text-gray-600 text-sm mb-2">
                                    <FaMapMarkerAlt className="w-4 h-4 mr-1 text-red-500" />
                                    {listing.location.country}
                                </div>

                                {/* Rooms & Bathrooms */}
                                <div className="flex items-center text-gray-500 text-sm gap-4 mb-2">
                                    <div className="flex items-center gap-1">
                                        <FaBed className="text-blue-500" size={16} />
                                        <span>{listing.facilities.rooms} Rooms</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaBath className="text-green-500" size={16} />
                                        <span>{listing.facilities.baths} Baths</span>
                                    </div>
                                </div>

                                {/* Price & Actions */}
                                <div className="flex justify-between items-center mt-3">
                                    <p className="text-lg font-bold text-brown-900">${listing.details.price} / night</p>
                                    <Link to={`/listing/${listing._id}`}>
                                        <button className="bg-brown-900 text-white px-4 py-2 rounded-lg hover:bg-brown-700 transition">
                                            Book Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </div>
    );
};

export default UserFavourites;

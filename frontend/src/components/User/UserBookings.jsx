import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaMapPin } from "react-icons/fa";
import LoadingOverlay from "../elements/LoadingOverlay"
import ImageCarousal from "../elements/ImageCarousal";
import LoginPromptOverlay from "../elements/LoginPromtOverlay"
import HeroBanner from "../elements/HeroBanner";
import EmptyStateComponent from "../elements/EmptyStateComponent";

const UserBookings = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ["User-Booking"],
        queryFn: async () => {
            const endpoint = import.meta.env.VITE_API_ENDPOINT;
            return (await axios.get(`${endpoint}/api/user/bookings`, { withCredentials: true })).data
        },
        retry: false
    });

    if (isLoading)
        return (
            <LoadingOverlay message="Fetching your bookings" isLoading={isLoading} />
        );

    if (error) {
        if (error.status) return (
            <LoginPromptOverlay message="view your bookings" />
        )
        return (
            <div className="bg-[#FAF3E0]">
                <HeroBanner />
                <div className="max-w-5xl mx-auto px-4 py-8">
                    <EmptyStateComponent primary="No bookings found." secondary="You haven't booked any listings yet." />
                </div>
            </div>
        );
    }

    if (data?.length === 0) return (
        <div className="bg-[#FAF3E0]">
            <HeroBanner />
            <div className="max-w-5xl mx-auto px-4 py-8">
                <EmptyStateComponent primary="No bookings found." secondary="You haven't booked any listings yet." />
            </div>
        </div>
    );

    return (
        <div className=" bg-[#FAF3E0]">
            <HeroBanner />
            <div className="max-w-5xl mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 "
                >
                    {data?.map((booking, index) => {
                        if (!booking) return;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-white shadow-lg rounded-2xl overflow-hidden"
                            >
                                {/* Swiper Image Slider */}
                                <ImageCarousal images={booking.images} />

                                {/* Booking Details */}
                                <div className="p-4" >
                                    <h3 className="text-xl font-semibold mb-2">{booking.title}</h3>
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <FaMapPin className="w-4 h-4 mr-1 text-red-500" />
                                        {booking.location.country}
                                    </div>
                                    <p className="text-gray-500 text-sm">
                                        {new Date(booking.date.start).toLocaleDateString()} -{" "}
                                        {new Date(booking.date.end).toLocaleDateString()}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default UserBookings;

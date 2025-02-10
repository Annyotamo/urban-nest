import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaMapPin } from "react-icons/fa";
import { BiLoader } from "react-icons/bi";

const UserBookings = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["User-Booking"],
        queryFn: async () =>
            (await axios.get("http://localhost:8080/api/user/bookings", { withCredentials: true })).data,
    });

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-screen">
                <BiLoader className="animate-spin text-gray-500 w-10 h-10" />
            </div>
        );

    if (isError)
        return (
            <div className="text-center text-red-500 font-semibold mt-10">
                Failed to load bookings. Try again later.
            </div>
        );

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-6">Your Bookings</h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
                {data?.map((booking, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden"
                    >
                        {/* Swiper Image Slider */}
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            className="w-full h-56"
                        >
                            {booking.images.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <img src={img} alt={`Property ${idx}`} className="w-full h-56 object-cover" />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Booking Details */}
                        <div className="p-4">
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
                ))}
            </motion.div>
        </div>
    );
};

export default UserBookings;

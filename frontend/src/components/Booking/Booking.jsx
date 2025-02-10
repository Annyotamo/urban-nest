import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingOverlay from '../elements/LoadingOverlay';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import ImageCarousal from './ImageCarousal';
import DatePicker from './DatePicker';
import Map from "../rent/Location/Map";
import Details from './Details';
import toast, { Toaster } from 'react-hot-toast';
import ErrorComponent from '../elements/ErrorComponent';

const Booking = () => {
    const { lid } = useParams();
    const [date, setDate] = useState({ start: null, end: null });
    const [error, setError] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);

    // Fetch listing data
    const { data, isLoading } = useQuery({
        queryKey: ['listing', lid],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:8080/api/listing/${lid}`, {
                withCredentials: true,
            });
            return response.data;
        },
    });

    // Mutation to create a booking
    const { mutateAsync: createBooking } = useMutation({
        mutationFn: async (values) => {
            await axios.post("http://localhost:8080/api/booking/create", {
                date: values,
                lid: lid,
            }, { withCredentials: true });
        },
        onSuccess: () => toast.success("Booking successfully created"),
        onError: (err) => console.log("[Error] Booking could not be registered:", err)
    });

    // Mutation for favoriting/unfavoriting
    const { mutateAsync: favouriteMutate } = useMutation({
        mutationFn: async (values) => {
            await axios.post("http://localhost:8080/api/user/favourites", values, {
                withCredentials: true
            });
        },
        onSuccess: () => isFavorited ? toast.success("Yay! This is now added to your favourites") : toast.error("Removed from favorites"),
    });

    // Set favorite status when data loads
    useEffect(() => {
        if (data?.favourite !== undefined) {
            setIsFavorited(data.favourite);
        }
    }, [data]);

    // Handle booking submission
    async function onSubmit(date) {
        if (!date.start || !date.end) {
            setError(true);
            return;
        }
        await createBooking(date);
    }

    // Handle toggling favorite status
    function sendFavouriteStatus() {
        favouriteMutate({ lid, status: !isFavorited });
        setIsFavorited((prev) => !prev);
    }

    if (isLoading) return <LoadingOverlay isLoading={isLoading} message="Fetching data" />;

    const { owner, details, location, facilities, images, category = [], favourite } = data;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-beige-50"
        >
            <Navbar />

            <div className='p-6'>
                {/* Header Section */}
                <motion.header
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-8 px-2 flex justify-between items-center"
                >
                    <div>
                        <h1 className="text-5xl font-bold text-brown-900">{details.title}</h1>
                        <p className='text-lg text-brown-700 italic mt-1 mb-3'>By {owner.name}</p>
                        <div className='flex flex-row items-center gap-2 mt-2'>
                            <FaMapMarkerAlt className='text-red-600' size={20} />
                            <p className="text-brown-700">{location.country}</p>
                        </div>
                    </div>

                    {/* Favorite Button */}
                    <motion.button
                        onClick={sendFavouriteStatus}
                        className="p-3 rounded-full bg-beige-200 shadow-md hover:bg-beige-300 transition-all"
                        animate={{ scale: isFavorited ? 1.2 : 1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaHeart
                            size={28}
                            className={isFavorited ? "text-red-500" : "text-gray-400"}
                            animate={{ scale: isFavorited ? [1, 1.5, 1] : 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>
                </motion.header>

                {/* Categories Section */}
                <div className="mb-8 flex flex-wrap gap-2">
                    {category.map((cat, index) => (
                        <span
                            key={index}
                            className="bg-beige-100 text-brown-700 px-4 py-2 rounded-full text-sm"
                        >
                            {cat}
                        </span>
                    ))}
                </div>

                {/* Image Carousel */}
                <ImageCarousal images={images} />

                {/* Details Section */}
                <Details location={location} facilities={facilities} details={details} />

                {/* Map and Date Picker */}
                <div className='flex sm:flex-row flex-col gap-8 mb-8'>
                    <Map latitude={location.latLng[0]} longitude={location.latLng[1]} />
                    <DatePicker setDate={setDate} listingId={lid} />
                </div>

                {error && <ErrorComponent message="Select your booking dates" />}

                {/* Booking Box */}
                <div className="bg-brown-900 text-beige-50 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        ${details.price} <span className="text-sm">/ night</span>
                    </h2>
                    <button
                        className="w-full bg-beige-50 text-brown-900 py-2 px-4 rounded-lg font-semibold hover:bg-beige-200 transition-colors"
                        onClick={() => onSubmit(date)}
                    >
                        Book Now
                    </button>
                </div>
            </div>
            <Toaster position='top-center' />
        </motion.div>
    );
};

export default Booking;

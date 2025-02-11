import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingOverlay from '../elements/LoadingOverlay';
import { motion } from 'framer-motion';
import Navbar from '../navbar/Navbar';
import ImageCarousal from './ImageCarousal';
import DatePicker from './DatePicker';
import Map from "../rent/Location/Map";
import Details from './Details';
import toast, { Toaster } from 'react-hot-toast';
import BookingHeader from './BookingHeader';
import LoginPromptOverlay from "../elements/LoginPromtOverlay"
import BookingCategories from './BookingCategories';

const Booking = () => {
    const { lid } = useParams();
    const [date, setDate] = useState({ start: null, end: null });
    const [errorComponent, setErrorComponent] = useState(<></>);
    const [isFavorited, setIsFavorited] = useState(false);

    // Fetch listing data
    const { data, isLoading: isListingLoading } = useQuery({
        queryKey: ['listing', lid],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:8080/api/listing/${lid}`, {
                withCredentials: true,
            });
            return response.data;
        },
    });

    // Mutation to create a booking
    const { mutateAsync: createBooking, isLoading: isBookingLoading } = useMutation({
        mutationFn: async (values) => {
            await axios.post("http://localhost:8080/api/booking/create", {
                date: values,
                lid: lid,
            }, { withCredentials: true });
        },
        onSuccess: () => toast.success("Booking successfully created"),
        onError: (error) => {
            if (error.status === 401) setErrorComponent(<LoginPromptOverlay message="book property" />)
        },
        retry: false,
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

    if (isBookingLoading || isListingLoading) return <LoadingOverlay isLoading={isListingLoading} message="Fetching data" />;


    const { owner, details, location, facilities, images, category = [] } = data;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-beige-50"
        >
            {errorComponent}
            <Navbar />

            <div className='p-6'>

                <BookingHeader details={details} location={location} owner={owner} sendFavouriteStatus={sendFavouriteStatus} isFavorited={isFavorited} />
                <BookingCategories category={category} />
                <ImageCarousal images={images} />
                <Details location={location} facilities={facilities} details={details} />
                <div className='flex sm:flex-row flex-col gap-8 mb-8'>
                    <Map latitude={location.latLng[0]} longitude={location.latLng[1]} />
                    <DatePicker setDate={setDate} listingId={lid} />
                </div>

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

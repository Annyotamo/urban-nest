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
import LoginPromptOverlay from "../elements/LoginPromtOverlay";
import BookingCategories from './BookingCategories';
import BookNowAccordion from './BookNowAccordion';
import ErrorOverlay from '../elements/ErrorOverlay';
import { queryClient } from "../../main";

const Booking = () => {
    const { lid } = useParams();
    const [date, setDate] = useState({ start: null, end: null });
    const [isFavorited, setIsFavorited] = useState(false);

    const [listingError, setListingError] = useState(null);
    const [bookingError, setBookingError] = useState(null);
    const [favError, setFavError] = useState(null);


    const { data, isLoading: isListingLoading, error: error__getListing } = useQuery({
        queryKey: ['listing'],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:8080/api/listing/${lid}`, {
                withCredentials: true,
            });
            return response.data;
        },
        retry: false,
        onError: (error) => {
            setListingError(error);
        },
    });

    const { mutateAsync: createBooking, isLoading: isBookingLoading, error: error__createBooking } = useMutation({
        mutationKey: ["create-booking"],
        mutationFn: async (values) => {
            await axios.post("http://localhost:8080/api/booking/create", {
                date: values.date,
                guests: values.guests,
                lid: lid,
            }, { withCredentials: true });
        },
        onSuccess: () => toast.success("Booking successfully created"),
        retry: false,
        onError: (error) => {
            setBookingError(error);
        },
    });

    const { mutateAsync: favouriteMutate, error: error__addFav } = useMutation({
        mutationKey: ["add-favourites"],
        mutationFn: async (values) => {
            await axios.post("http://localhost:8080/api/user/favourites", values, {
                withCredentials: true
            });
        },
        onSuccess: () => isFavorited ? toast.success("Yay! This is now added to your favourites") : toast.error("Removed from favorites"),
        retry: false,
        onError: (error) => {
            setFavError(error);
        },
    });

    useEffect(() => {
        if (data?.favourite !== undefined) {
            setIsFavorited(data.favourite);
        }
    }, [data]);

    async function submitBookingDetails(guests) {
        console.log({ date, guests });
        await createBooking({ date, guests });
    }

    async function sendFavouriteStatus() {
        await favouriteMutate({ lid, status: !isFavorited });
        setIsFavorited((prev) => !prev);
    }

    if (isBookingLoading || isListingLoading) return <LoadingOverlay isLoading={isListingLoading} message="Fetching data" />;

    const { owner, details, location, facilities, images, category = [] } = data || {}; // Handle potential null data

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-beige-50"
        >
            <Navbar />

            {listingError && <ErrorOverlay home={true} actionFunc={() => queryClient.invalidateQueries({ queryKey: ["listing"] })} closeFunc={() => setListingError(null)} />}
            {bookingError && (
                bookingError.status === 401 ?
                    <LoginPromptOverlay close={true} closeFunc={() => setBookingError(null)} message="Login to book a property" /> :
                    <ErrorOverlay close={true} message="Select all booking details" closeFunc={() => setBookingError(null)} actionFunc={() => queryClient.invalidateQueries({ queryKey: ["create-booking"] })} />
            )}
            {favError && (
                favError.status === 401 ?
                    <LoginPromptOverlay close={true} closeFunc={() => setFavError(null)} message="Login to add to favorites" /> :
                    <ErrorOverlay close={true} closeFunc={() => setFavError(null)} actionFunc={() => queryClient.invalidateQueries({ queryKey: ["add-favourites"] })} />
            )}

            {data && ( // Conditionally render the rest of the content if data exists
                <div className='p-6'>
                    <BookingHeader details={details} location={location} owner={owner} sendFavouriteStatus={sendFavouriteStatus} isFavorited={isFavorited} />
                    <BookingCategories category={category} />
                    <ImageCarousal images={images} />
                    <Details location={location} facilities={facilities} details={details} />
                    <div className='flex sm:flex-row flex-col gap-8 mb-8'>
                        <Map latitude={location.latLng[0]} longitude={location.latLng[1]} />
                        <DatePicker setDate={setDate} listingId={lid} />
                    </div>

                    <BookNowAccordion onSubmit={submitBookingDetails} details={details} />
                </div>
            )}

            <Toaster position='top-center' />
        </motion.div>
    );
};

export default Booking;
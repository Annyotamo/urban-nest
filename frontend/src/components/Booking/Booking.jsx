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
import useFavourite from '../../hooks/useFavourite';
import useListing from '../../hooks/useListing';
import useCreateBooking from '../../hooks/useCreateBooking';

const Booking = () => {
    const { lid } = useParams();
    const [date, setDate] = useState({ start: null, end: null });

    const { data, isLoading: isListingLoading, listingError, setListingError } = useListing(lid);
    const { createBooking, isLoading: isBookingLoading, bookingError, setBookingError } = useCreateBooking(lid);

    const { isFavorited, favError, sendFavouriteStatus, setFavError, isFavLoading } = useFavourite(data?.favourite, lid);

    async function submitBookingDetails(guests) {
        console.log({ date, guests });
        await createBooking({ date, guests });
    }

    if (isBookingLoading || isListingLoading || isFavLoading) return <LoadingOverlay isLoading={isListingLoading} message="Fetching data" />;

    const { owner, details, location, facilities, images, category = [] } = data || {};

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-beige-50"
        >
            <Navbar />

            {listingError && <ErrorOverlay home={true} actionFunc={() => { queryClient.invalidateQueries({ queryKey: ["listing"] }); setListingError(false) }} />}
            {bookingError && (
                bookingError.status === 401 ?
                    <LoginPromptOverlay close={true} closeFunc={() => setBookingError(null)} message="Login to book a property" /> :
                    <ErrorOverlay close={true} message="Select all booking details" closeFunc={() => setBookingError(null)} actionFunc={() => setBookingError(null)} />
            )}
            {favError && (
                favError.status === 401 ?
                    <LoginPromptOverlay close={true} closeFunc={() => setFavError(null)} message="Login to add to favorites" /> :
                    <ErrorOverlay close={true} closeFunc={() => setFavError(null)} actionFunc={() => queryClient.invalidateQueries({ queryKey: ["add-favourites"] })} />
            )}

            {data && (
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
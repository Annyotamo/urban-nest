import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Listing from "./Listing";
import ErrorComponent from "../elements/ErrorComponent";
import LoadingOverlay from "../elements/LoadingOverlay";

const Listings = () => {
    const {
        data: listingData = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["listings"],
        queryFn: async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/listing/all");
                return response.data;
            } catch (error) {
                // Re-throw the error to be caught by react-query
                throw error;  // Important for proper error handling with react-query
            }
        },
        retry: false,
    });

    if (isLoading) {
        return <LoadingOverlay isLoading={isLoading} message={"Fetching property listings"} />
    }

    if (isError) {
        return (
            <ErrorComponent message="Failed to connect to server" />
        );
    }

    if (listingData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="text-center text-gray-600 font-bold text-2xl mb-4">
                    No listings found.
                </div>
                <p className="text-gray-500">Try adjusting your search or check back later.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {listingData.map((listing) => (
                    <Listing listing={listing} key={listing._id} />
                ))}
            </div>
        </div>
    );
};

export default Listings;
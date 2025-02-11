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
                throw error;
            }
        },
        retry: false,
    });

    if (isLoading) {
        return <LoadingOverlay isLoading={isLoading} message={"Fetching property listings"} />;
    }

    if (isError) {

        return <ErrorComponent message="Failed to connect to server" />;
    }

    if (listingData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
                <h2 className="text-gray-700 font-semibold text-2xl mb-2">No listings found.</h2>
                <p className="text-gray-500">Try adjusting your search or check back later.</p>
            </div>
        );
    }

    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#FAEDCD]">
            <div className="flex flex-row gap-5 flex-wrap">
                {listingData.map((listing) => (
                    <Listing listing={listing} key={listing._id} />
                ))}
            </div>
        </div >
    );
};

export default Listings;

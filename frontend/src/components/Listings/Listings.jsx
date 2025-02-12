import React, { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Listing from "./Listing";
import ErrorComponent from "../elements/ErrorComponent";
import LoadingOverlay from "../elements/LoadingOverlay";
import EmptyStateComponent from "../elements/EmptyStateComponent";
import { useSelector } from "react-redux";

const Listings = () => {
    const { search } = useSelector(state => state.search);

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

    const filterListing = useCallback((listing) =>
        listing.details.title.toLowerCase().includes(search.toLowerCase()) ||
        listing.location.country.toLowerCase().startsWith(search.toLowerCase()),
        [search]);

    if (isLoading) return <LoadingOverlay isLoading={isLoading} message={"Fetching property listings"} />;
    if (isError) return <ErrorComponent message="Server down" />;
    if (listingData.length === 0) return <EmptyStateComponent />;

    const filteredListings = listingData.filter(filterListing);

    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#FAEDCD]">
            <div className="flex flex-row gap-5 flex-wrap">
                {filteredListings.map((listing) => ( // Use the filtered list here
                    <Listing listing={listing} key={listing._id} />
                ))}
            </div>
        </div>
    );
};

export default Listings;
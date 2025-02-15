import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Listing from "./Listing";
import ErrorComponent from "../elements/ErrorComponent";
import LoadingOverlay from "../elements/LoadingOverlay";
import EmptyStateComponent from "../elements/EmptyStateComponent";
import { useSelector } from "react-redux";

const Listings = () => {
    const { search, category: cat } = useSelector((state) => state.search);

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

    const filterSearch = (listing) =>
        listing.details.title.toLowerCase().includes(search.toLowerCase()) ||
        listing.location.country.toLowerCase().startsWith(search.toLowerCase());

    const filterCategory = (listing) => {
        if (!cat || cat.length === 0) return true;
        if (!listing.category || listing.category.length === 0) return false;

        return cat.some((selectedCategory) =>
            listing.category.some((listingCategory) => listingCategory.toLowerCase() === selectedCategory.toLowerCase())
        );
    };

    if (isLoading) return <LoadingOverlay isLoading={isLoading} message={"Fetching property listings"} />;
    if (isError) return <ErrorComponent message="Server down" />;
    if (listingData.length === 0) return <EmptyStateComponent primary="No listings found." secondary="Try adjusting your search or check back later." />;

    const filteredListings = listingData.filter(filterSearch).filter(filterCategory);

    if (filteredListings.length === 0) return <EmptyStateComponent primary="No listings match your filters." secondary="Try adjusting your filters or check back later." />;

    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#FAEDCD] relative z-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredListings.map((listing) => (
                    <Listing listing={listing} key={listing._id} />
                ))}
            </div>
        </div>
    );
};

export default Listings;

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Listings = () => {

    const {
        data: listingData = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["listings"], // Unique key for the query
        queryFn: async () => {
            const response = await axios.get("http://localhost:8080/api/listing/all");
            return response.data; // Return the data to be cached
        },
    });

    // Loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Error state
    if (isError) {
        return <div className="text-center text-red-600">Error: {error.message}</div>;
    }

    // No listings found
    if (listingData.length === 0) {
        return <div className="text-center text-gray-600">No listings found.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {listingData.map((listing) => (
                    <div
                        key={listing._id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src="" // Placeholder image (replace with actual image URL)
                            alt={listing.details?.title || "Listing"}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{listing.details?.title || "No Title"}</h3>
                            <p className="text-green-600 font-semibold mb-2">
                                ${listing.details?.price || "N/A"} / night
                            </p>
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                                <span>📍 {listing.location?.country || "Location not specified"}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 text-sm text-gray-700 mb-4">
                                <span>🛏️ {listing.facilities?.rooms || "N/A"} Rooms</span>
                                <span>🛁 {listing.facilities?.baths || "N/A"} Baths</span>
                                <span>{listing.facilities?.pets ? "🐾 Pets Allowed" : "🚫 No Pets"}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {listing.category?.map((cat, index) => (
                                    <span
                                        key={index}
                                        className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full"
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Listings;
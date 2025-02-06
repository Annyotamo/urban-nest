import React from 'react';
import ImageCarousel from './ImageCarousal';

const Listing = ({ listing }) => {
    return (
        <div
            key={listing._id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg w-72"
        >
            {listing.images?.length > 0 ? (
                <ImageCarousel images={listing.images} />
            ) : (
                <div className="w-full h-36 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    No Image Available
                </div>
            )}
            <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{listing.details?.title || "No Title"}</h3>
                <p className="text-green-600 font-medium text-sm mt-1">${listing.details?.price || "N/A"} / night</p>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                    <span>📍 {listing.location?.country || "Location not specified"}</span>
                </div>
                <div className="flex flex-wrap gap-1 text-xs text-gray-700 mt-2">
                    <span>🛏️ {listing.facilities?.rooms || "N/A"} Rooms</span>
                    <span>🛁 {listing.facilities?.baths || "N/A"} Baths</span>
                    <span>{listing.facilities?.pets ? "🐾 Pets Allowed" : "🚫 No Pets"}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                    {listing.category?.map((cat, index) => (
                        <span
                            key={index}
                            className="bg-yellow-400 text-black text-[10px] font-semibold px-2 py-1 rounded-full"
                        >
                            {cat}
                        </span>
                    ))}
                </div>
                <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md text-sm hover:bg-blue-600 transition-colors duration-300">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default Listing;

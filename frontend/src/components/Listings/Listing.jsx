import React from "react";
import { FaMapMarkerAlt, FaBed, FaBath, FaPaw, FaBan } from "react-icons/fa";
import ImageCarousal from "../elements/ImageCarousal";
import { Link } from "react-router-dom";

const Listing = ({ listing }) => {
    return (
        <div
            key={listing._id}
            className="bg-[#FAF3E0] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-[22rem]"
        >
            {/* Image Carousel */}
            {listing.images?.length > 0 ? (
                <ImageCarousal images={listing.images} height={44} />
            ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    No Image Available
                </div>
            )}

            {/* Content Section */}
            <div className="p-4">
                {/* Title & Location */}
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-[#5C3D2E] truncate">{listing.details?.title || "No Title"}</h3>
                    <div className="hidden sm:flex items-center text-xs text-gray-600">
                        <FaMapMarkerAlt className="text-red-400 mr-1" />
                        <span>{listing.location?.country || "Location not specified"}</span>
                    </div>
                </div>

                {/* Price */}
                <p className="text-[#8B5E3C] font-medium text-sm">
                    ${listing.details?.price || "N/A"} <span className="text-gray-500">/ night</span>
                </p>

                {/* Facilities (Show only on larger screens) */}
                <div className="hidden sm:flex items-center gap-4 text-xs text-gray-700 mt-3">
                    <div className="flex items-center gap-1">
                        <FaBed className="text-[#6F3D2E]" />
                        <span>{listing.facilities?.rooms || "N/A"} Rooms</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaBath className="text-[#6F3D2E]" />
                        <span>{listing.facilities?.baths || "N/A"} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                        {listing.facilities?.pets ? (
                            <>
                                <FaPaw className="text-green-600" />
                                <span>Pets Allowed</span>
                            </>
                        ) : (
                            <>
                                <FaBan className="text-red-600" />
                                <span>No Pets</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Categories (Show only if they exist) */}
                {listing.category?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {listing.category.map((cat, index) => (
                            <span
                                key={index}
                                className="bg-[#DAB49D] text-[#5C3D2E] text-[10px] font-semibold px-2 py-1 rounded-full"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                )}

                {/* View Details Button */}
                <Link to={`/listing/${listing._id}`}>
                    <button className="mt-4 w-full bg-[#D4A373] text-white py-2 rounded-md text-sm hover:bg-[#6F3D2E] transition-colors duration-300">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Listing;

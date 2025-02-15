import React from "react";
import { FaMapMarkerAlt, FaBed, FaBath, FaPaw, FaBan } from "react-icons/fa";
import ImageCarousal from "../elements/ImageCarousal";
import { Link } from "react-router-dom";

const Listing = ({ listing }) => {
    return (
        <div
            key={listing._id}
            className="bg-white bg-opacity-75 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full min-h-[22rem] sm:min-h-[20rem] flex flex-col"
        >
            {/* Image Carousel */}
            {listing.images?.length > 0 ? (
                <ImageCarousal images={listing.images} height={40} />
            ) : (
                <div className="w-full h-36 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    No Image Available
                </div>
            )}

            {/* Content Section */}
            <div className="p-3 sm:p-4 flex flex-col flex-grow">
                {/* Title & Location */}
                <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[#5C3D2E] truncate min-w-0">
                        {listing.details.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-600">
                        <FaMapMarkerAlt className="text-red-400 mr-1" />
                        <span>{listing.location.country}</span>
                    </div>
                </div>

                {/* Price */}
                <p className="text-[#8B5E3C] font-medium text-sm">
                    ${listing.details.price} <span className="text-gray-500">/ night</span>
                </p>

                {/* Facilities */}
                <div className="flex items-center gap-3 text-xs text-gray-700 mt-2 sm:mt-3">
                    <div className="flex items-center gap-1">
                        <FaBed className="text-[#6F3D2E]" />
                        <span>{listing.facilities?.rooms || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaBath className="text-[#6F3D2E]" />
                        <span>{listing.facilities?.baths || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        {listing.facilities?.pets ? (
                            <>
                                <FaPaw className="text-green-600" />
                                <span>Yes</span>
                            </>
                        ) : (
                            <>
                                <FaBan className="text-red-600" />
                                <span>No</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Categories (Hidden on Small Screens) */}
                {listing.category?.length > 0 && (
                    <div className="hidden lg:flex flex-wrap gap-2 mt-3">
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

                {/* View Details Button (Always at Bottom) */}
                <div className="mt-auto">
                    <Link to={`/listing/${listing._id}`}>
                        <button className="mt-3 sm:mt-4 w-full bg-[#D4A373] text-white py-2 rounded-md text-sm hover:bg-[#6F3D2E] transition-colors duration-300">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Listing;
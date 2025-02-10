import React from 'react'
import { FaBath, FaBed, FaMapMarkerAlt, FaPaw, FaWifi } from 'react-icons/fa'

const Details = ({ location, facilities, details }) => {
    return (
        <div
            className="bg-beige-100 p-6 rounded-lg shadow-md mb-8"
        >
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">Details</h2>
            <p className="text-brown-700 mb-4">{details.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                    <FaMapMarkerAlt className="text-brown-700 mr-2" />
                    <span className="text-brown-700">{location.country}</span>
                </div>
                <div className="flex items-center">
                    <FaBed className="text-brown-700 mr-2" />
                    <span className="text-brown-700">{facilities.rooms} Rooms</span>
                </div>
                <div className="flex items-center">
                    <FaBath className="text-brown-700 mr-2" />
                    <span className="text-brown-700">{facilities.baths} Baths</span>
                </div>
                <div className="flex items-center">
                    {facilities.pets ? (
                        <FaPaw className="text-brown-700 mr-2" />
                    ) : (
                        <FaPaw className="text-brown-300 mr-2" />
                    )}
                    <span className={facilities.pets ? "text-brown-700" : "text-brown-300"}>
                        {facilities.pets ? "Pets Allowed" : "No Pets Allowed"}
                    </span>
                </div>
                {facilities.more.includes('wifi') && (
                    <div className="flex items-center">
                        <FaWifi className="text-brown-700 mr-2" />
                        <span className="text-brown-700">WiFi</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Details

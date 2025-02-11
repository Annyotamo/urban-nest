import React from 'react'
import { FaHeart, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion';

const BookingHeader = ({ details, owner, location, sendFavouriteStatus, isFavorited, }) => {
    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 px-2 flex justify-between items-center"
        >
            <div>
                <h1 className="text-5xl font-bold text-brown-900">{details.title}</h1>
                <p className='text-lg text-brown-700 italic mt-1 mb-3'>By {owner.name}</p>
                <div className='flex flex-row items-center gap-2 mt-2'>
                    <FaMapMarkerAlt className='text-red-600' size={20} />
                    <p className="text-brown-700">{location.country}</p>
                </div>
            </div>

            {/* Favorite Button */}
            <motion.button
                onClick={sendFavouriteStatus}
                className="p-3 rounded-full bg-beige-200 shadow-md hover:bg-beige-300 transition-all"
                animate={{ scale: isFavorited ? 1.2 : 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <FaHeart
                    size={28}
                    className={isFavorited ? "text-red-500" : "text-gray-400"}
                    animate={{ scale: isFavorited ? [1, 1.5, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>
        </motion.header>
    )
}

export default BookingHeader

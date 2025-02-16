import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion';

const BookingHeader = ({ details, owner, sendFavouriteStatus, isFavorited, }) => {
    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 px-2 flex justify-between items-center relative"
        >
            <div>
                <h1 className="sm:text-5xl text-3xl font-bold text-brown-900 font-poppins">{details.title}</h1>
                <p className='sm:text-3xl text-xl text-brown-700/40 my-2 font-eczar'>By {owner.name}</p>
            </div>

            {/* Favorite Button */}
            <motion.button
                onClick={sendFavouriteStatus}
                className="p-3 rounded-full bg-beige-200 shadow-md hover:bg-beige-300 transition-all "
                animate={{ scale: isFavorited ? 1.2 : 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <FaHeart
                    className={isFavorited ? "text-red-500 sm:size-10" : "text-gray-400 sm:size-10"}
                    animate={{ scale: isFavorited ? [1, 1.5, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>
        </motion.header>
    )
}

export default BookingHeader

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCircleUser } from "react-icons/fa6";
import useAuthStatus from '../../hooks/useAuthStatus';
import LoadingOverlay from '../elements/LoadingOverlay';
import { Link } from "react-router-dom";
const User = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const createBubbles = () => {
            return new Array(20).fill(0).map((_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 40 + 10,
                delay: Math.random() * 5,
            }));
        };
        setBubbles(createBubbles());
    }, []);

    const { data: userData, isLoading } = useAuthStatus();

    if (isLoading) return <LoadingOverlay message="Fetching user details" />

    const { user } = userData?.data || {};

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#FAEDCD]/50 backdrop-blur-lg md:p-0 p-8 z-[10000]">
            <div className="absolute inset-0 overflow-hidden">
                {bubbles.map((bubble) => (
                    <motion.div
                        key={bubble.id}
                        className="absolute bg-[#D4A373] rounded-full opacity-20"
                        style={{
                            width: `${bubble.size}px`,
                            height: `${bubble.size}px`,
                            left: `${bubble.x}%`,
                            top: `${bubble.y}%`,
                        }}
                        animate={{
                            y: ["0%", "-150%"],
                            opacity: [1, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: bubble.delay,
                        }}
                    />
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/70 backdrop-blur-md rounded-lg shadow-xl text-center p-8"
            >
                <div className="flex flex-col sm:flex-row rounded-r-lg">
                    <div className="w-full p-8">
                        <FaCircleUser size={50} className='text-[#DAB49D] mx-auto' />
                        <h2 className="text-2xl font-semibold mt-4">{user?.firstName} {user?.lastName}</h2>
                        <p className="text-gray-600">{user?.email}</p>

                        <div className="mt-6 space-y-4">
                            <button className="w-full py-2 px-4 bg-[#DAB49D] text-white rounded-lg shadow-md hover:bg-[#C89B8A] transition duration-300">
                                <Link to="/user/bookings">
                                    View Bookings</Link>

                            </button>
                            <button className="w-full py-2 px-4 bg-[#DAB49D] text-white rounded-lg shadow-md hover:bg-[#C89B8A] transition duration-300">
                                <Link to="/user/favourites">
                                    View Favorites
                                </Link>

                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default User

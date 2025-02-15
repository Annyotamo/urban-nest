import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCircleUser } from "react-icons/fa6";
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
                className="relative bg-white/70 backdrop-blur-md rounded-lg shadow-xl text-center"
            >
                <div className="flex flex-col sm:flex-row rounded-r-lg">
                    <div className="w-full p-8">
                        <FaCircleUser size={50} className='text-[#DAB49D]' />
                        {/* Display user details here*/}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default User

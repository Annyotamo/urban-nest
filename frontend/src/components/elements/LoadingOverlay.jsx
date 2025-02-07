import React from "react";
import { motion } from "framer-motion";

const LoadingOverlay = ({ isLoading, message }) => {
    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full bg-[#f5f5dc]/80 flex justify-center items-center z-50 backdrop-blur-sm"
        >
            <div className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-full border-4 border-[#8b4513] border-opacity-40 border-t-[#8b4513] animate-spin shadow-lg"></div>
                {message && (
                    <p className="mt-4 text-lg text-gray-800 font-semibold drop-shadow-md">{message}</p>
                )}
            </div>
        </motion.div>
    );
};

export default LoadingOverlay;

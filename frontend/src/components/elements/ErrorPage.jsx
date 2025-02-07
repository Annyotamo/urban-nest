import React from "react";
import { motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi";

const ErrorPage = ({ message = "Failed to connect to the server. Please try again later." }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-100 to-red-200 text-red-800">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 md:p-10 max-w-lg text-center"
            >
                <FiAlertTriangle className="text-red-600 w-16 h-16 animate-pulse" />
                <h1 className="text-2xl font-bold mt-4">Connection Error</h1>
                <p className="text-md text-gray-700 mt-2">{message}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-6 bg-red-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all"
                >
                    Retry</button>
            </motion.div>
        </div>
    );
};

export default ErrorPage;

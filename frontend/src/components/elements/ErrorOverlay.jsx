import { queryClient } from "../../main"; // Import the shared queryClient
import { motion } from "framer-motion";
import { useEffect } from "react";
import { GoAlert } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const ErrorOverlay = ({ message = "Something went wrong!", queryKey = [], close }) => {
    const nav = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#FAEDCD]/50 backdrop-blur-lg z-[50] md:p-0 p-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/70 backdrop-blur-md rounded-lg shadow-xl text-center w-[500px]"
            >
                <div className="flex flex-col sm:flex-row rounded-r-lg">
                    <div className="md:w-[40%] sm:p-8 p-2 bg-red-300/60 sm:rounded-r-none rounded-lg flex justify-center items-center">
                        <GoAlert size={50} className="text-red-600" />
                    </div>
                    <div className="md:w-[60%] w-full flex flex-col justify-center p-8 text-left">
                        <h2 className="md:text-2xl text-lg font-bold mb-2 text-red-600">Error</h2>
                        <p className="text-gray-600 mb-4">{message}</p>
                        <div className="flex gap-4">
                            <button
                                className="p-2 w-[70%] hover:bg-red-500 text-white rounded-lg bg-red-400 transition"
                                onClick={() => close ? close(null) : queryClient.invalidateQueries({ queryKey })}
                            >
                                Retry
                            </button>
                            <button
                                className="p-2 w-[30%] bg-[#DAB49D] hover:bg-[#D4A373] text-white rounded-lg transition"
                                onClick={() => nav("/")}
                            >
                                Home
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ErrorOverlay;

import { motion } from "framer-motion";
import { GoAlert } from "react-icons/go";
import { queryClient } from "../../main";

const ErrorComponent = ({ message = "Something went wrong!", addHome = false, queryKey = [], mutationKey }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white/70 backdrop-blur-md rounded-lg shadow-xl text-center w-[500px] mx-auto mt-20"
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
                            className="p-2 hover:bg-red-500 w-full text-white rounded-lg bg-red-400 transition"
                            onClick={() => queryClient.invalidateQueries({ queryKey })}
                        >
                            Retry
                        </button>
                        {addHome && <button
                            className="p-2 w-[30%] bg-[#DAB49D] hover:bg-[#D4A373] text-white rounded-lg transition"
                            onClick={() => nav("/")}
                        >
                            Home
                        </button>}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ErrorComponent;

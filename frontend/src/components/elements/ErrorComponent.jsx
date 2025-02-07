import { AiOutlineExclamationCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const ErrorComponent = ({ message = "Something went wrong!" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-4 bg-red-100 border border-red-300 text-red-700 p-4 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-5"
        >
            <AiOutlineExclamationCircle className="w-6 h-6 text-red-600" />
            <p className="text-sm font-medium">{message}</p>
        </motion.div>
    );
};

export default ErrorComponent;

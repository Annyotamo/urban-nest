import { motion } from "framer-motion";

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-[50vh] bg-beige-100">
            <motion.div
                className="w-12 h-12 border-4 border-brown-600 border-t-transparent rounded-full animate-spin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
        </div>
    );
};

export default LoadingSpinner;

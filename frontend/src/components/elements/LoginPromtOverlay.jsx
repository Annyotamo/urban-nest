import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import urbanNestLogo from "../../assets/urbanNestLogo.png";
import { MdOutlineCancel } from "react-icons/md";

const LoginPromtOverlay = ({ message = "add to favourites", close = false, closeFunc = () => { } }) => {
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

    let closeComponent = <></>
    if (close) closeComponent = (<button className="absolute top-1 right-1 text-[#DAB49D]" onClick={closeFunc}><MdOutlineCancel size={20} /></button>)

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#FAEDCD]/50 backdrop-blur-lg md:p-0 p-8 z-[10000]">
            {/* Bubbles Animation */}
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

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/70 backdrop-blur-md rounded-lg shadow-xl text-center"
            >
                <div className="flex flex-col sm:flex-row rounded-r-lg">
                    <div className="md:w-[60%] sm:p-8 p-2 bg-[#DAB49D]/60 rounded-lg flex justify-center items-center">
                        <img src={urbanNestLogo} className="w-[150px] sm:w-[250px]" />
                    </div>
                    <div className="md:w-[40%] w-full flex flex-col justify-center p-8 text-left">
                        <h2 className="md:text-2xl text-lg font-bold mb-2">Login Required</h2>
                        <p className="text-gray-600 mb-4">You need to log in to {message}.</p>
                        <button className="px-6 py-2 hover:bg-[#D4A373] text-white rounded-full bg-[#DAB49D] transition">
                            Login
                        </button>
                        {closeComponent}
                    </div>
                </div>


            </motion.div>
        </div>
    );
};

export default LoginPromtOverlay;

import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ErrorOverlay = ({ message = "Something went wrong!", action = "Retry", actionFunc, close = false, closeFunc, home = false }) => {
    const nav = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    let HomeComponent = <></>
    if (home) HomeComponent = (<button
        className="p-2 bg-[#DAB49D] hover:bg-[#D4A373] text-white rounded-full transition"
        onClick={() => nav("/")}
    >
        <FaHome size={25} />
    </button >)

    let CloseComponent = <></>
    if (close) CloseComponent = (<button className="absolute top-1 right-1 text-red-500" onClick={closeFunc}><MdOutlineCancel size={20} /></button>)

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
                        <h2 className="md:text-2xl text-lg font-bold mb-2 text-red-600">{action}</h2>
                        <p className="text-gray-600 mb-4">{message}</p>
                        <div className="flex gap-4">
                            <button
                                className="p-2 w-full hover:bg-red-500 text-white rounded-lg bg-red-400 transition"
                                onClick={actionFunc}
                            >
                                {action}
                            </button>
                            {HomeComponent} {/* Displays home button if home is true */}
                        </div>
                        {CloseComponent} {/* Displays close button if close is true */}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ErrorOverlay;



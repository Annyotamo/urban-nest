import React from "react";
import { FaHome } from "react-icons/fa";
import logo from "../../assets/urbanNestLogo.png";

const HeroBanner = ({ action }) => {
    return (
        <div className="flex flex-col items-center justify-center text-[#5F4B32] bg-gradient-to-r from-[#FAEDCD] via-[#E9EDC9] to-[#D4A373] p-6 py-20 sm:py-4 shadow-lg">

            <div className="mb-4">
                <img src={logo} alt="UrbanNest Logo" className="w-28 md:w-36" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-center">
                List Your Home & Start Earning
            </h1>

            {/* Subtext */}
            <p className="text-md md:text-lg text-[#8B5A2B] mt-2 max-w-lg text-center">
                A seamless way to rent out your property and connect with trusted tenants.
            </p>

            {/* CTA Button */}
            <button className="bg-[#D4A373] text-white text-lg font-semibold px-6 py-3 mt-5 rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => action(true)}>
                <FaHome className="inline-block mr-2 text-xl" />
                Rent Your Home
            </button>
        </div>
    );
};

export default HeroBanner;

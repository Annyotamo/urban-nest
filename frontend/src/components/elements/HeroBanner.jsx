import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import logo from "../../assets/urbanNestLogo.png";

const HeroBanner = () => {
    return (
        <div className="relative h-[70vh] flex flex-col items-center justify-center text-[#5F4B32] bg-gradient-to-r from-[#FAEDCD] via-[#E9EDC9] to-[#D4A373] px-6 shadow-lg">

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
            <Link to="/list">
                <button className="bg-[#D4A373] text-white text-lg font-semibold px-6 py-3 mt-5 rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <FaHome className="inline-block mr-2 text-xl" />
                    Rent Your Home
                </button>
            </Link>
        </div>
    );
};

export default HeroBanner;

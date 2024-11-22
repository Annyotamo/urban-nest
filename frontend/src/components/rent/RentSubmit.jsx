import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const RentSubmit = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center p-6 space-y-6 rounded-lg  max-w-lg mx-auto">
            <h2 className="text-3xl font-semibold text-center">You're Ready to Rent Your Property!</h2>

            <div className="flex justify-center">
                <FaCheckCircle className="text-green-500 text-6xl" />
            </div>

            <p className="text-lg 'text-center
            text-gray-700">You're almost there! Take a moment to review your property details before submitting.</p>

            <div className="w-full mt-6 flex flex-row justify-center">
                <Link
                    to="/"
                    className="py-3 px-6 text-white text-xl font-semibold bg-[#d4a373] rounded-lg shadow-md hover:bg-[#d29f60] transition duration-300"
                >
                    Review Your Rent Options
                </Link>
            </div>
        </div>
    );
};

export default RentSubmit;

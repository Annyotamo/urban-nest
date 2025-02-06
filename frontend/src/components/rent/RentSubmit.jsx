import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
const RentSubmit = ({ toggle }) => {

    const listingData = useSelector((state) => state.giveRent);

    async function postFunction(listingData) {
        const res = await axios.post("http://localhost:8080/api/listing/create", listingData);
        console.log(res.data);
        toggle(false);
        toast.success("Listing successfully created!");
    }

    return (
        <>
            <div className="h-full flex flex-col items-center justify-center p-6 space-y-6 rounded-lg max-w-lg mx-auto">
                <h2 className="text-xl font-semibold text-center">You're Ready to Rent Your Property!</h2>

                <div className="flex justify-center">
                    <FaCheckCircle className="text-green-500 text-6xl" />
                </div>

                <p className="text-md text-center text-gray-700">
                    You're almost there!
                </p>

                <div className="w-full mt-6 flex flex-row gap-3">
                    <Link
                        to="/"
                        className="p-2 text-white text-md w-[40%] font-semibold bg-[#d4a373] rounded-lg shadow-md hover:bg-[#d29f60] transition duration-300 text-center"
                    >
                        Review listing
                    </Link>
                    <button
                        className="p-2 text-white text-md w-[60%] font-semibold bg-[#4caf50] rounded-lg shadow-md hover:bg-[#45a049] transition duration-300"
                        onClick={() => postFunction(listingData)}
                    >
                        Submit Your Property
                    </button>
                </div>

            </div>
        </>

    );
};

export default RentSubmit;

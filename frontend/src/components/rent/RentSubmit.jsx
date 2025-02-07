import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query'
import LoadingOverlay from '../elements/LoadingOverlay';
const RentSubmit = ({ toggle }) => {

    const { mutateAsync } = useMutation({
        mutationFn: (values) => createListing(values),
    })

    const [loading, setLoading] = React.useState(false);

    const listingData = useSelector((state) => state.giveRent);

    async function createListing() {
        setLoading(true);
        const res = await listingDataUpload();
        const collectionId = res.data.id;
        const headers = { "x-collection-id": collectionId };
        await listingImageUpload(headers);
        setLoading(false);
        toggle(false);
        toast.success("Listing successfully created!");
    }

    // Uploading all listing data
    async function listingDataUpload() {
        return await axios.post("http://localhost:8080/api/listing/create/data", listingData, { withCredentials: true });
    }
    // Uploading all images
    async function listingImageUpload(headers) {

        const { images } = listingData;

        // convert images to FormData
        const formData = new FormData();
        images.forEach((image) => {
            formData.append("images", image);
        });

        await axios.post("http://localhost:8080/api/listing/create/images", formData, { headers, withCredentials: true });
    }

    return (
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
                    onClick={() => mutateAsync(listingData)}
                >
                    Submit Your Property
                </button>
            </div>
            <LoadingOverlay isLoading={loading} message="Creating listing" />
        </div>

    );
};

export default RentSubmit;

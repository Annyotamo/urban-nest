import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { details } from '../../../redux/slices/give-rent/giveRent.slice';

const PricePanel = () => {

    const dispatch = useDispatch();
    const storeData = useSelector(state => state.giveRent);

    useEffect(() => {
        setPropertyObject({
            price: storeData.details.price,
            title: storeData.details.title,
            description: storeData.details.description,
        })
    }, [storeData.details])

    const [properyObject, setPropertyObject] = useState({
        price: 100,
        title: "",
        description: ""
    })

    const handlePriceChange = (e) => {
        const value = e.target.value;
        // Ensure the price is a number and within a reasonable range
        if (!isNaN(value)) {
            dispatch(details({ type: "price", data: Number(value) }));
        }
    }

    return (
        <div className="h-full overflow-y-auto px-6">
            <h2 className="text-xl mb-2">Set Price & Property Details</h2>
            <p className='text-md mb-6'>Affordable and luxurious</p>

            <div className="space-y-6">
                {/* Price Input */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Price (in USD)</label>
                    <div className="flex items-center gap-4">
                        <input
                            type="number"
                            value={properyObject.price}
                            onChange={handlePriceChange}
                            className="w-[50%] px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Title Input */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Property Title</label>
                    <input
                        type="text"
                        placeholder="Enter a catchy title"
                        onChange={(e) => dispatch(details({ type: "title", data: e.target.value }))}
                        value={properyObject.title}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>

                {/* Description Input */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Property Description</label>
                    <textarea
                        placeholder="Provide a detailed description of the property"
                        rows="5"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        onChange={(e) => dispatch(details({ type: "description", data: e.target.value }))}
                        value={properyObject.description}
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default PricePanel;
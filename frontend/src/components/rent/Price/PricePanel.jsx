import React, { useState } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

const PricePanel = ({ onDetailsChange }) => {
    const [formState, setFormState] = useState({
        price: 100,
        title: '',
        description: '',
    });

    const handleChange = (key, value) => {
        const updatedForm = { ...formState, [key]: value };
        setFormState(updatedForm);
        if (onDetailsChange) {
            onDetailsChange(updatedForm);
        }
    };

    return (
        <div className="h-full overflow-y-auto px-6">
            <h2 className="text-xl mb-2">Set Price & Property Details</h2>
            <p className='text-md mb-6'>Affordable and luxurious</p>

            <div className="space-y-6">
                {/* Price Slider */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Price (in USD)</label>
                    <div className="flex items-center gap-4">
                        <Slider
                            min={50}
                            max={5000}
                            step={50}
                            value={formState.price}
                            onChange={(value) => handleChange('price', value)}
                        />
                        <span className="text-lg font-semibold">${formState.price}</span>
                    </div>
                </div>

                {/* Title Input */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Property Title</label>
                    <input
                        type="text"
                        value={formState.title}
                        onChange={(e) => handleChange('title', e.target.value)}
                        placeholder="Enter a catchy title"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>

                {/* Description Input */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Property Description</label>
                    <textarea
                        value={formState.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                        placeholder="Provide a detailed description of the property"
                        rows="5"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default PricePanel;

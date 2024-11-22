import React, { useState } from 'react';
import Select from 'react-select';

const Facilities = ({ onOptionsChange }) => {

    const facilitiesOptions = [
        { value: 'wifi', label: 'Wi-Fi' },
        { value: 'pool', label: 'Pool' },
        { value: 'terrace', label: 'Terrace' },
        { value: 'garden', label: 'Garden' },
        { value: 'parking', label: 'Parking' },
        { value: 'gym', label: 'Gym' },
        { value: 'air_conditioning', label: 'Air Conditioning' },
        { value: 'fireplace', label: 'Fireplace' },
    ];


    return (
        <div className="px-4">
            <h2 className="text-xl mb-2">Set Rent Options</h2>
            <p className='text-gray-500 mb-6 text-md'>Tell travellers about your home</p>

            <div className="space-y-4">
                <div>
                    <label className="block mb-2 text-sm font-semibold">Facilities</label>
                    <Select options={facilitiesOptions} isClearable isMulti classNames={{
                        control: () => "border-2 mb-5",
                        input: () => "text-lg",
                        option: () => "text-lg",
                    }}
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold">Number of Rooms</label>
                    <input
                        type="number"
                        min="1"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-semibold">Number of Baths</label>
                    <input
                        type="number"
                        min="1"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                    />
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        className="mr-2"
                    />
                    <label className="text-sm font-semibold">Pets Allowed</label>
                </div>
            </div>
        </div>
    );
};

export default Facilities;

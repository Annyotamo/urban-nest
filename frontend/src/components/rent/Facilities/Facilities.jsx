import React from 'react';
import FacilityInputs from "./FacilityInputs"


const Facilities = () => {

    return (
        <div className="px-4">
            <h2 className="text-xl mb-2">Set Rent Options</h2>
            <p className='text-gray-500 mb-6 text-md'>Tell travellers about your home</p>
            <FacilityInputs />
        </div>
    );
};

export default Facilities;

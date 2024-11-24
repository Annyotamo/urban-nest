import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { facilitiesOptions } from './facilitiesOptions';
import { useDispatch, useSelector } from "react-redux";
import { facilities } from '../../../redux/slices/give-rent/giveRent.slice';

const FacilityInputs = () => {
    const [facilityState, setFacilityState] = useState({
        rooms: 1,
        baths: 1,
        pets: false,
        more: []
    });

    const data = useSelector((state) => state.giveRent);
    const dispatch = useDispatch();

    useEffect(() => {
        const moreFacilitiesArray = data.facilities.more.map((item) =>
            facilitiesOptions.find(option => option.value === item) // Find corresponding option
        );
        setFacilityState({
            rooms: data.facilities.rooms,
            baths: data.facilities.baths,
            pets: data.facilities.pets,
            more: moreFacilitiesArray
        });
    }, [data.facilities]);

    const handleSelectChange = (selected) => {
        if (selected) {
            dispatch(facilities({ type: "more", data: selected.map(option => option.value) }));
        } else {
            dispatch(facilities({ type: "more", data: [] }));
        }
    };

    return (
        <form className="space-y-4">
            <div>
                <label className="block mb-2 text-sm font-semibold">Facilities</label>
                <Select
                    options={facilitiesOptions}
                    isClearable
                    value={facilityState.more}
                    isMulti
                    onChange={handleSelectChange}
                    classNamePrefix="react-select"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-semibold">Number of Rooms</label>
                <input
                    type="number"
                    min="1"
                    value={facilityState.rooms}
                    name="rooms"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                    onChange={(e) => dispatch(facilities({ type: "rooms", data: parseInt(e.target.value) }))}
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-semibold">Number of Baths</label>
                <input
                    type="number"
                    min="1"
                    name="baths"
                    value={facilityState.baths}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                    onChange={(e) => dispatch(facilities({ type: "baths", data: parseInt(e.target.value) }))}
                />
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    name="pets"
                    className="mr-2"
                    checked={facilityState.pets}
                    onChange={(e) => dispatch(facilities({ type: "pets", data: e.target.checked }))}
                />
                <label className="text-sm font-semibold">Pets Allowed</label>
            </div>
        </form>
    );
};

export default FacilityInputs;

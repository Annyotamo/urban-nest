import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import useCountries from './useCountries.hook';
import { useDispatch, useSelector } from "react-redux";
import { location } from '../../../redux/slices/give-rent/giveRent.slice';

const SelectCountry = () => {
    const { getAll } = useCountries();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.giveRent);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const allCountries = getAll();
        const matchedCountry = allCountries.find(
            (country) => country.label === data.location.country
        );
        setSelectedCountry(matchedCountry || null);
    }, [data.location, getAll]);

    function handleChange(selected) {
        if (selected) {
            dispatch(location({ country: selected.label, latLng: selected.latlng }));
        } else {
            setLatLng(null);
            dispatch(location(null));
        }
    }

    return (
        <Select
            placeholder="Anywhere"
            options={getAll()}
            isClearable
            value={selectedCountry}
            onChange={(e) => handleChange(e)}
            formatOptionLabel={(option) => (
                <div className="flex flex-row items-center gap-3">
                    <div>🏳️</div>
                    <div>
                        {option.label}, <span className="text-neutral-800 ml-1">{option.value}</span>
                    </div>
                </div>
            )}
            classNames={{
                control: () => "border-2 mb-5",
                input: () => "text-lg",
                option: () => "text-lg",
            }}
            styles={{
                menuPortal: (baseStyles) => ({
                    ...baseStyles,
                    zIndex: 100,
                }),
                menu: (baseStyles) => ({
                    ...baseStyles,
                    maxHeight: "200px",
                    overflowY: "auto",
                }),
            }}
            menuPortalTarget={document.body}
        />
    );
};

export default SelectCountry;

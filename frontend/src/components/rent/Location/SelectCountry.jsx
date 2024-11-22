import React from 'react';
import Select from 'react-select';
import useCountries from './useCountries.hook';
import { useDispatch, useSelector } from "react-redux"
import { location } from '../../../redux/slices/give-rent/giveRent.slice';

const SelectCountry = ({ setLatLng }) => {
    const { getAll } = useCountries();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.giveRent);

    function handleChange(selected) {
        if (selected) {
            setLatLng(selected.latlng);
            dispatch(location(selected.label))
        }
    }

    return (
        <Select
            placeholder="Anywhere"
            options={getAll()}
            isClearable
            defaultValue={data.location} // work on this
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
            menuPosition="fixed"
            menuShouldScrollIntoView={false}
        />
    );
};

export default SelectCountry;

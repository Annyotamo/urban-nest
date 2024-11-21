import React from 'react';
import Select from 'react-select';
import useCountries from './useCountries.hook';

const SelectCountry = ({ value, setLatLng }) => {
    const { getAll } = useCountries();

    // Handle option change (when user selects a country)
    function handleChange(selected) {
        if (selected) {
            console.log(selected.latlng);  // Make sure selected has latlng property
            setLatLng(selected.latlng); // Assuming you want to set latlng here
        }
    }

    return (
        <Select
            placeholder="Anywhere"
            options={getAll()}
            isClearable
            onChange={handleChange}  // Use onChange here to get the selected option
            formatOptionLabel={(option) => (
                <div className="flex flex-row items-center gap-3">
                    <div>🏳️</div> {/* Convert flag code to emoji */}
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

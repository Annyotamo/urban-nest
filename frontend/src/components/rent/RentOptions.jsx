import React from 'react'
import OverlayModal from "../elements/OverlayModal.element"
import { options } from '../navbar/Categories';

const RentOptions = ({ toggle }) => {
    return (
        <OverlayModal heading="Rent your home" close={toggle}>
            <div className="h-full overflow-y-auto p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Select a Category</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {options.map((option) => (
                        <div
                            key={option.label}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
                            onClick={() => onSelectCategory(option.label)}
                        >
                            <option.icon className="text-4xl text-primary mb-2" />
                            <h3 className="text-lg font-medium text-gray-700">{option.label}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </OverlayModal>
    )
}

export default RentOptions

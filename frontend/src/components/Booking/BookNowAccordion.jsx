// BookNowAccordion.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookNowAccordion = ({ onSubmit, details }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [guests, setGuests] = useState([{ firstName: '', lastName: '', Country: '', age: '' }]);

    const toggleAccordion = () => setIsOpen(!isOpen);

    const handleGuestChange = (index, field, value) => {
        const newGuests = [...guests];
        newGuests[index][field] = value;
        setGuests(newGuests);
    };

    const addGuest = () => {
        setGuests([...guests, { firstName: '', lastName: '', Country: '', age: '' }]);
    };

    const handleBooking = () => {
        onSubmit(guests);
    };

    return (
        <div className="bg-brown-900 text-beige-50 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">
                ${details?.price} <span className="text-sm">/ night</span> {/* Optional chaining */}
            </h2>
            <button
                className="w-full bg-beige-50 text-brown-900 py-3 px-4 rounded-lg font-semibold hover:bg-beige-200 transition-all duration-300"
                onClick={toggleAccordion}
            >
                {isOpen ? 'Close Booking' : 'Book Now'}
            </button>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
            >

                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Guest Information</h3>
                    {guests.map((guest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mt-2 p-4 border rounded-lg bg-brown-800"
                        >
                            <input
                                type="text"
                                placeholder="First Name"
                                value={guest.firstName}
                                onChange={(e) => handleGuestChange(index, 'firstName', e.target.value)}
                                className="w-full p-2 mb-2 rounded-lg border bg-brown-700 text-beige-50"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={guest.lastName}
                                onChange={(e) => handleGuestChange(index, 'lastName', e.target.value)}
                                className="w-full p-2 mb-2 rounded-lg border bg-brown-700 text-beige-50"
                            />
                            <input
                                type="text"
                                placeholder="Country"
                                value={guest.Country}
                                onChange={(e) => handleGuestChange(index, 'Country', e.target.value)}
                                className="w-full p-2 mb-2 rounded-lg border bg-brown-700 text-beige-50"
                            />
                            <input
                                type="number"
                                placeholder="Age"
                                value={guest.age}
                                onChange={(e) => handleGuestChange(index, 'age', e.target.value)}
                                className="w-full p-2 rounded-lg border bg-brown-700 text-beige-50"
                            />
                        </motion.div>
                    ))}
                    <button
                        className="mt-2 bg-beige-50 text-brown-900 py-2 px-4 rounded-lg font-semibold hover:bg-beige-200 transition-all duration-300"
                        onClick={addGuest}
                    >
                        Add Guest
                    </button>
                    <button
                        className="mt-4 w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
                        onClick={handleBooking}
                    >
                        Confirm Booking
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default BookNowAccordion;

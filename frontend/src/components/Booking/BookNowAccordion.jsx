import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa6';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import AccordionInput from './AccordionInput';

const BookNowAccordion = ({ onSubmit, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);

    const initialValues = {
        guests: [{ firstName: '', lastName: '', country: '', age: '' }],
    };

    const validationSchema = Yup.object({
        guests: Yup.array().of(
            Yup.object({
                firstName: Yup.string().required('First Name is required'),
                lastName: Yup.string().required('Last Name is required'),
                country: Yup.string().required('Country is required'),
                age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
            })
        ),
    });

    return (
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">
                ${details?.price} <span className="text-sm">/ night</span>
            </h2>
            <button
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
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
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            onSubmit(values.guests);
                        }}
                    >
                        {({ values }) => (
                            <Form>
                                <FieldArray name="guests">
                                    {({ push }) => (
                                        <div>
                                            {values.guests.map((guest, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="mt-2"
                                                >
                                                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                                                        <AccordionInput
                                                            label="First Name"
                                                            name={`guests[${index}].firstName`}
                                                            type="text"
                                                            placeholder="First Name"
                                                        />
                                                        <AccordionInput
                                                            label="Last Name"
                                                            name={`guests[${index}].lastName`}
                                                            type="text"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                                                        <AccordionInput
                                                            label="Country"
                                                            name={`guests[${index}].country`}
                                                            type="text"
                                                            placeholder="Country"
                                                        />
                                                        <AccordionInput
                                                            label="Age"
                                                            name={`guests[${index}].age`}
                                                            type="number"
                                                            placeholder="Age"
                                                        />
                                                    </div>
                                                </motion.div>
                                            ))}
                                            <button
                                                type="button"
                                                className="mt-6 text-gray-900 rounded-lg font-semibold transition-all duration-300 flex flex-row items-center justify-center text-2xl border p-2 shadow-md hover:shadow-xl"
                                                onClick={() => push({ firstName: '', lastName: '', country: '', age: '' })}
                                            >
                                                <FaPlus size={25} className="mr-1" />
                                                Add Guest
                                            </button>
                                            <button
                                                type="submit"
                                                className="mt-4 w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
                                            >
                                                Confirm Booking
                                            </button>
                                        </div>
                                    )}
                                </FieldArray>
                            </Form>
                        )}
                    </Formik>
                </div>
            </motion.div>
        </div>
    );
};

export default BookNowAccordion;

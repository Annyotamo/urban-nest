import React from 'react';
import { useField } from 'formik';

const AccordionInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id || props.name}>
                {label}
            </label>
            <input
                className={`w-full p-3 rounded-lg border bg-white text-gray-900 border-gray-400 shadow-md focus:outline-none focus:border ${meta.touched && meta.error ? 'border-red-500' : ''
                    }`}
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="text-red-500 text-sm mt-1">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default AccordionInput;

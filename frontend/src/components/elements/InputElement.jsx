import React from 'react'
import { input_styles, label_styles } from './inputStyles'
import { GoAlertFill } from 'react-icons/go'

const InputElement = ({ formik, type = "", title = "", name }) => {
    return (
        <div className="flex items-center relative">
            <div className="flex-1">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        autoComplete="false"
                        type={type}
                        name={name ? name : title.toLowerCase()}
                        className={input_styles}
                        placeholder=" "
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[`${name}`]}
                    />
                    <label
                        htmlFor={title.toLowerCase()}
                        onChange={formik.handleChange}
                        value={formik.values[`${name}`]}
                        className={label_styles}>
                        {title}
                    </label>
                </div>
            </div>
            {formik.touched[`${name}`] && formik.errors[`${name}`] && (
                <div className="absolute -bottom-1 flex items-center text-red-500 w-full">
                    <GoAlertFill className="mr-1" size={10} />
                    <span className="text-[10px]">{formik.errors[`${name}`]}</span>
                </div>
            )}
        </div>
    )
}

export default InputElement

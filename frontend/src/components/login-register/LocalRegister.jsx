import React from 'react'
import Input from '../elements/Input.element'
import { useFormik } from "formik"
import { useMutation } from '@tanstack/react-query';
import axios from "axios"
import * as Yup from "yup"
import { Toaster, toast } from 'react-hot-toast';

const LocalRegister = () => {

    const { mutateAsync } = useMutation({
        mutationFn: async (values) => await axios.post("http://localhost:8080/api/auth/register", values)
    })


    const formik = useFormik({
        initialValues: {
            username: "", email: "", password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .matches(/^[a-zA-Z0-9_]([a-zA-Z0-9_.]*[a-zA-Z0-9_])?$/, "Invalid username format")
                .required("Username is required")
                .min(3, "Username must be at least 3 characters"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            password: Yup.string()
                .required("Password is required")
                .min(6, "Password must be at least 6 characters"),
            // confirmPassword: Yup.string()
            //     .oneOf([Yup.ref('password'), null], "Passwords must match")
            //     .required("Confirm Password is required"),
        })
        ,
        onSubmit: async (values) => {
            try {
                await mutateAsync(values);
                toast("Registration successful!")
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <>
            <div className='min-h-screen flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-semibold mb-2'>Welcome to Urban-nest</h1>
                <form
                    className="mx-auto w-[70%] md:w-[50%] lg:w-[30%] border rounded-lg p-10 shadow-md"
                    onSubmit={(e) => {
                        e.preventDefault();
                        formik.handleSubmit();
                    }}
                >
                    <Input
                        type="text"
                        title="Username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username && (
                        <div className='text-red-500 text-[12px] font-semibold'>*{formik.errors.username}</div>
                    )}

                    <Input
                        type="email"
                        title="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className='text-red-500 text-[12px] font-semibold'>*{formik.errors.email}</div>
                    )}

                    <Input
                        type="password"
                        title="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className='text-red-500 text-[12px] font-semibold'>*{formik.errors.password}</div>
                    )}

                    <Input
                        type="password"
                        title="Confirm password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />
                    {formik.errors.confirmPassword && (
                        <div className='text-red-500 text-[12px] font-semibold'>*{formik.errors.confirmPassword}</div>
                    )}

                    <button
                        type="submit"
                        className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${formik.isValid ? 'bg-blue-700 hover:bg-blue-800' : 'bg-gray-400 cursor-not-allowed'
                            }`}
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        Sign up
                    </button>
                </form>
            </div>
            <div className='min-h-screen flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-semibold mb-2'>Welcome to Urban-nest</h1>
                <form
                    className="mx-auto w-[70%] md:w-[50%] lg:w-[30%] border rounded-lg p-10 shadow-md"
                    onSubmit={(e) => {
                        e.preventDefault();
                        formik.handleSubmit();
                    }}
                >
                    <Input
                        type="text"
                        title="Username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                    {formik.errors.username && (
                        <div className='text-red-500 text-[12px] font-semibold'>*{formik.errors.username}</div>
                    )}

                    <Input
                        type="email"
                        title="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.errors.email && (
                        <div className='text-red-500 text-[12px] font-semibold'>*{formik.errors.email}</div>
                    )}

                    <Input
                        type="password"
                        title="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.errors.password && (
                        <div className='text-red-500 text-[12px] font-semibold'>*{formik.errors.password}</div>
                    )}

                    <Input
                        type="password"
                        title="Confirm password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />
                    {formik.errors.confirmPassword && (
                        <div className='text-red-500 text-[12px] font-semibold'>*{formik.errors.confirmPassword}</div>
                    )}

                    <button
                        type="submit"
                        className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${formik.isValid ? 'bg-blue-700 hover:bg-blue-800' : 'bg-gray-400 cursor-not-allowed'
                            }`}
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        Sign up
                    </button>
                </form>
            </div>
            <Toaster position='bottom-center' />
        </>
    );

}

export default LocalRegister

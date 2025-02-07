import React from 'react';
import Input from '../elements/Input.element';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import * as Yup from 'yup';
import { Toaster, toast } from 'react-hot-toast';
import { GoAlertFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from '../elements/LoadingOverlay';

const LocalRegister = () => {
    const nav = useNavigate();
    const [loading, setLoading] = React.useState(false);

    const { mutateAsync } = useMutation({
        mutationFn: async (values) => await axios.post('http://localhost:8080/api/auth/register', values),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .matches(/^[A-Za-z]+$/, 'First name can only contain letters')
                .min(2, 'First name must be at least 2 characters')
                .required('First name is required'),
            lastName: Yup.string()
                .matches(/^[A-Za-z]+$/, 'Last name can only contain letters')
                .min(2, 'Last name must be at least 2 characters')
                .required('Last name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                await mutateAsync(values);
                toast.success('Registration successful!');
                setLoading(true);
                setTimeout(() => nav("/"), 2000);
            } catch (error) {
                toast.error('Registration failed. Please try again.');
                console.error(error.response.data);
            }
        },
    });

    if (loading) {
        return <LoadingOverlay isLoading={loading} message={"Redirecting to home"} />;
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg relative">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Welcome to Urban-nest
                </h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="space-y-6">
                        {/* First Name Field */}
                        <div className="flex items-center">
                            <div className="flex-1">
                                <Input
                                    type="text"
                                    title="First Name"
                                    name="firstName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                />
                            </div>
                            {formik.touched.firstName && formik.errors.firstName && (
                                <div className="ml-2 flex items-center text-red-500 w-[40%]">
                                    <GoAlertFill className="mr-1" />
                                    <span className="text-xs">{formik.errors.firstName}</span>
                                </div>
                            )}
                        </div>

                        {/* Last Name Field */}
                        <div className="flex items-center">
                            <div className="flex-1">
                                <Input
                                    type="text"
                                    title="Last Name"
                                    name="lastName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName}
                                />
                            </div>
                            {formik.touched.lastName && formik.errors.lastName && (
                                <div className="ml-2 flex items-center text-red-500 w-[40%]">
                                    <GoAlertFill className="mr-1" />
                                    <span className="text-xs">{formik.errors.lastName}</span>
                                </div>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="flex items-center">
                            <div className="flex-1">
                                <Input
                                    type="email"
                                    title="Email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                            </div>
                            {formik.touched.email && formik.errors.email && (
                                <div className="ml-2 flex items-center text-red-500 w-[40%]">
                                    <GoAlertFill className="mr-1" />
                                    <span className="text-xs">{formik.errors.email}</span>
                                </div>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="flex items-center">
                            <div className="flex-1">
                                <Input
                                    type="password"
                                    title="Password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <div className="ml-2 flex items-center text-red-500 w-[40%]">
                                    <GoAlertFill className="mr-1" />
                                    <span className="text-xs">{formik.errors.password}</span>
                                </div>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div className="flex items-center">
                            <div className="flex-1">
                                <Input
                                    type="password"
                                    title="Confirm Password"
                                    name="confirmPassword"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                />
                            </div>
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <div className="ml-2 flex items-center text-red-500 w-[40%]">
                                    <GoAlertFill className="mr-1" />
                                    <span className="text-xs">{formik.errors.confirmPassword}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`w-full mt-6 py-2.5 rounded-lg text-white font-semibold ${formik.isValid && !formik.isSubmitting
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-gray-400 cursor-not-allowed'
                            }`}
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        {formik.isSubmitting ? 'Signing up...' : 'Sign up'}
                    </button>
                </form>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default LocalRegister;

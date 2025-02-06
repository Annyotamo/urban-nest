import React, { useState } from 'react';
import Input from '../elements/Input.element';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const LocalLogin = () => {
    const nav = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const { mutateAsync } = useMutation({
        mutationFn: async (values) => await axios.post('http://localhost:8080/api/auth/login', values),
        onError: (error) => {
            toast.error('Login failed. Please check your credentials.');
            console.error(error.response.data);
        },
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: async (values) => {
            try {
                setIsLoading(true);
                const val = await mutateAsync(values);
                console.log(val.data);
                setLoginError(null);
                toast.success('Login successful!');
                setTimeout(() => {
                    setIsLoading(false);
                    nav("/");
                }, 2000);
            } catch (error) {
                setLoginError(error.response.data);
                setIsLoading(false);
            }
        },
    });

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
            {isLoading ? (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-lg font-semibold">Login successful, sending you back to the homepage...</p>
                    </div>
                </div>
            ) : (
                <form
                    onSubmit={formik.handleSubmit}
                    className="mx-auto w-[70%] md:w-[50%] lg:w-[30%] border rounded-lg p-10 shadow-md bg-white"
                >
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>

                    {/* Username/Email Field */}
                    <Input
                        title="Username/Email"
                        name="username"
                        type="text"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {/* Password Field */}
                    <Input
                        title="Password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {loginError != null && <div className='p-2 text-white bg-red-400 rounded-md'>{loginError.message}</div>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-6 py-2.5 rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center"
                    >
                        Submit
                    </button>
                </form>
            )}
            <Toaster position="top-center" />
        </div>
    );
};

export default LocalLogin;
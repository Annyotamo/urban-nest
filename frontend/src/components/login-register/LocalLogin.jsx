import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../elements/LoadingOverlay"
import InputElement from '../elements/InputElement';
import ErrorOverlay from '../elements/ErrorOverlay';

const LocalLogin = () => {
    const nav = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const { mutateAsync } = useMutation({
        mutationKey: ["Login"],
        mutationFn: async (values) => await axios.post('http://localhost:8080/api/auth/login', values, { withCredentials: true }),
        onError: (error) => {
            toast.error('Login failed');
        },
    });

    const formik = useFormik({
        initialValues: {
            email: '', // Change 'username' to 'email'
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
                <LoadingOverlay isLoading={isLoading} message="Redirecting to home" />
            ) : (
                <form
                    onSubmit={formik.handleSubmit}
                    className="mx-auto w-[70%] md:w-[50%] lg:w-[30%] border rounded-lg p-10 shadow-md bg-white"
                >
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>

                    {/* Email Field */}
                    <InputElement formik={formik} type="email" name="email" title="Email" />

                    {/* Password Field */}
                    <InputElement
                        formik={formik}
                        title="Password"
                        name="password"
                        type="password"
                    />

                    {loginError != null && <ErrorOverlay message={loginError.message} queryKey={["Login"]} close={setLoginError} />}

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

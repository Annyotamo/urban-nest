import React, { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'; // Import motion from framer-motion
import LoadingOverlay from "../elements/LoadingOverlay";
import InputElement from '../elements/InputElement';
import urbanNestLogo from '../../assets/urbanNestLogo.png';
import ErrorOverlay from '../elements/ErrorOverlay';

const LocalLogin = () => {
    const nav = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [bubbles, setBubbles] = useState([]); // State for bubbles

    // Bubble creation logic
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const createBubbles = () => {
            return new Array(20).fill(0).map((_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 40 + 10,
                delay: Math.random() * 5,
            }));
        };
        setBubbles(createBubbles());
        return () => (document.body.style.overflow = 'auto');
    }, []);

    const { mutateAsync } = useMutation({
        mutationKey: ["Login"],
        mutationFn: async (values) => await axios.post('http://localhost:8080/api/auth/login', values, { withCredentials: true }),
        onError: () => setLoginError(true),
        onSuccess: () => setLoginError(null)
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            try {
                setIsLoading(true);
                await mutateAsync(values);
                toast.success('Login successful!');
                setTimeout(() => nav('/'), 2000);
            } catch (error) {
                toast.error('Login failed. Please try again.');
                setLoginError(error.response?.data || 'An error occurred');
                setIsLoading(false);
            }
        },
    });

    if (isLoading) {
        return <LoadingOverlay isLoading={isLoading} message={'Redirecting to home'} />;
    }

    if (loginError) {
        return <ErrorOverlay message={loginError.message} queryKey={["Login"]} close={setLoginError} />;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#FAEDCD]/50 backdrop-blur-lg z-[50] md:p-0 p-8">
            {/* Bubbles Animation */}
            <div className="absolute inset-0 overflow-hidden">
                {bubbles.map((bubble) => (
                    <motion.div
                        key={bubble.id}
                        className="absolute bg-[#D4A373] rounded-full opacity-20"
                        style={{
                            width: `${bubble.size}px`,
                            height: `${bubble.size}px`,
                            left: `${bubble.x}%`,
                            top: `${bubble.y}%`,
                        }}
                        animate={{
                            y: ["0%", "-150%"],
                            opacity: [1, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: bubble.delay,
                        }}
                    />
                ))}
            </div>

            {/* Login Form */}
            <div className="relative bg-white/70 backdrop-blur-md rounded-lg shadow-xl text-center">
                <div className="flex flex-col sm:flex-row rounded-r-lg w-[80vw] sm:w-full">
                    <div className="md:w-[60%] sm:p-8 p-2 bg-[#DAB49D]/60 rounded-lg flex justify-center items-center">
                        <img src={urbanNestLogo} className="w-[150px] sm:w-[40%]" />
                    </div>
                    <div className="md:w-[60%] w-full flex flex-col justify-center p-8 text-left">
                        <h2 className="md:text-2xl text-lg font-bold mb-2">Login</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="space-y-2">
                                <InputElement formik={formik} name="email" title="Email" type="email" />
                                <InputElement formik={formik} name="password" title="Password" type="password" />
                            </div>
                            <button
                                type="submit"
                                className={`w-full mt-6 py-2.5 rounded-lg text-white font-semibold ${formik.isValid && !formik.isSubmitting
                                    ? 'bg-[#D4A373] hover:bg-[#DAB49D]'
                                    : 'bg-gray-400 cursor-not-allowed'
                                    }`}
                                disabled={!formik.isValid || formik.isSubmitting}
                            >
                                {formik.isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default LocalLogin;
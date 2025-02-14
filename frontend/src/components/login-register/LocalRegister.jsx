import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import * as Yup from 'yup';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import LoadingOverlay from '../elements/LoadingOverlay';
import InputElement from '../elements/InputElement';
import urbanNestLogo from '../../assets/urbanNestLogo.png';
import ErrorOverlay from '../elements/ErrorOverlay';

const LocalRegister = () => {
    const nav = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'auto';
    }, []);

    const { mutateAsync } = useMutation({
        mutationKey: ["Register"],
        mutationFn: async (values) => await axios.post('http://localhost:8080/api/auth/register', values),
        onError: () => setError(true), onSuccess: () => setError(null)
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
                setTimeout(() => nav('/user/login'), 2000);
            } catch (error) {
                toast.error('Registration failed. Please try again.');
                console.error(error.response.data);
            }
        },
    });

    if (loading) {
        return <LoadingOverlay isLoading={loading} message={'Redirecting to home'} />;
    }

    if (error) return <ErrorOverlay message={error.message} queryKey={["Register"]} close={setError``} />

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#FAEDCD]/50 backdrop-blur-lg z-[50] md:p-0 p-8">

            <div
                className="relative bg-white/70 backdrop-blur-md rounded-lg shadow-xl text-center"
            >
                <div className="flex flex-col sm:flex-row rounded-r-lg w-[80vw] sm:w-full">
                    <div className="md:w-[60%] sm:p-8 p-2 bg-[#DAB49D]/60 rounded-lg flex justify-center items-center">
                        <img src={urbanNestLogo} className="w-[150px] sm:w-[40%]" />
                    </div>
                    <div className="md:w-[60%] w-full flex flex-col justify-center p-8 text-left">
                        <h2 className="md:text-2xl text-lg font-bold mb-2">Register</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="space-y-2">
                                <InputElement formik={formik} name="firstName" title="First Name" type="text" />
                                <InputElement formik={formik} name="lastName" title="Last Name" type="text" />
                                <InputElement formik={formik} name="email" title="Email" type="email" />
                                <InputElement formik={formik} name="password" title="Password" type="password" />
                                <InputElement formik={formik} name="confirmPassword" title="Confirm Password" type="password" />
                            </div>

                            <button
                                type="submit"
                                className={`w-full mt-6 py-2.5 rounded-lg text-white font-semibold ${formik.isValid && !formik.isSubmitting
                                    ? 'bg-[#D4A373] hover:bg-[#DAB49D]'
                                    : 'bg-gray-400 cursor-not-allowed'
                                    }`}
                                disabled={!formik.isValid || formik.isSubmitting}
                            >
                                {formik.isSubmitting ? 'Signing up...' : 'Sign up'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default LocalRegister;
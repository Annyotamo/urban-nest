import React, { useEffect, useState } from 'react';
import RentAd from './RentAd';
import RentOptions from './RentOptions';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/slices/give-rent/giveRent.slice';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoginPromptOverlay from "../elements/LoginPromtOverlay"

const RentPropertyAd = () => {

    const [toggle, setToggle] = useState(false);
    const [isAuth, setAuth] = useState(false);
    const dispatch = useDispatch();

    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ["auth"],
        queryFn: async () => {
            const data = await axios.get("http://localhost:8080/api/auth/status", { withCredentials: true }); return data.data
        }
    })

    useEffect(() => {
        dispatch(reset());
    }, [toggle, data])

    if (isSuccess) {
        if (data.isAuthenticated === false) return <LoginPromptOverlay />
    }

    return (
        <>
            <RentAd toggle={setToggle} />
            {toggle && <RentOptions toggle={setToggle} />}
            <Toaster position='top-center' />
        </>
    )
};

export default RentPropertyAd;

import React, { useEffect, useState } from 'react';
import RentAd from './RentAd';
import RentOptions from './RentOptions';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/slices/give-rent/giveRent.slice';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoginPromptOverlay from "../elements/LoginPromtOverlay"
import useAuthStatus from '../../hooks/useAuthStatus';
import LoadingOverlay from '../elements/LoadingOverlay';

const RentPropertyAd = () => {

    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();

    const { data, isLoading } = useAuthStatus();

    useEffect(() => {
        dispatch(reset());
    }, [toggle, data])

    if (isLoading) return <LoadingOverlay />

    return (
        <>
            <RentAd toggle={setToggle} />
            {toggle && (data.data.isAuthenticated === true ? <RentOptions toggle={setToggle} /> : <LoginPromptOverlay close={true} closeFunc={() => setToggle(false)} />)}
            <Toaster position='top-center' />
        </>
    )
};

export default RentPropertyAd;

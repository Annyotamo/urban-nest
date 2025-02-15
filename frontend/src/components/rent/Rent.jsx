import React, { useEffect, useState } from 'react';
import RentAd from './RentAd';
import RentOptions from './RentOptions';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/slices/give-rent/giveRent.slice';
import { useQuery } from '@tanstack/react-query';
import LoginPromptOverlay from "../elements/LoginPromtOverlay"




const RentPropertyAd = () => {
    const [isAuth, setAuth] = useState(false);

    const { data, isSuccess } = useQuery({
        queryKey: ["Auth"],
        queryFn: async () => await axios.get("http://localhost:8080/api/auth/status", { withCredentials: true }),
    })

    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(reset());
    }, [toggle])

    if (isSuccess) console.log(data);


    return (
        <>
            <LoginPromptOverlay />
            <RentAd toggle={setToggle} />
            {toggle && <RentOptions toggle={setToggle} />}
            <Toaster position='top-center' />
        </>
    )
};

export default RentPropertyAd;

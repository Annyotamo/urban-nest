import React, { useEffect, useState } from 'react';
import RentAd from './RentAd';
import RentOptions from './RentOptions';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/slices/give-rent/giveRent.slice';




const RentPropertyAd = () => {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(reset());
    }, [toggle])


    return (
        <>
            <RentAd toggle={setToggle} />
            {toggle && <RentOptions toggle={setToggle} />}
            <Toaster position='top-center' />
        </>
    )
};

export default RentPropertyAd;

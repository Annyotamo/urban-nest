import React, { useState } from 'react';
import RentAd from './RentAd';
import RentOptions from './RentOptions';
import { useSelector } from 'react-redux';


const RentPropertyAd = () => {

    const [toggle, setToggle] = useState(false);
    const data = useSelector((state) => state.giveRent);
    console.log(data);

    return (
        <>
            <RentAd toggle={setToggle} />
            {toggle && <RentOptions toggle={setToggle} />}
        </>
    )
};

export default RentPropertyAd;

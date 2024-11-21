import React, { useState } from 'react';
import RentAd from './RentAd';
import RentOptions from './RentOptions';


const RentPropertyAd = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <RentAd toggle={setToggle} />
            {toggle && <RentOptions toggle={setToggle} />}
        </>
    )
};

export default RentPropertyAd;

import React, { useEffect } from 'react'
import axios from 'axios'
import LoginPromtOverlay from './components/elements/LoginPromtOverlay';
import ErrorOverlay from "./components/elements/ErrorOverlay"
import HeroBanner from './components/elements/HeroBanner';
const Test = () => {

    const [value, setValue] = React.useState("");
    const [errorStatus, setErrorStatus] = React.useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const endpoint = import.meta.env.VITE_API_ENDPOINT;
                const res = await axios.get(`${endpoint}/api/test`, { withCredentials: true });
                if (res.status == 200) {
                    console.log(res.data);
                    setValue(res.data.message);
                }

            } catch (error) {
                setErrorStatus(error.status)
                setValue(error.message);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            {value}
            {errorStatus === 401 && <ErrorOverlay home={true} close={true} />}
            <HeroBanner />
        </div>
    )
}

export default Test

import React, { useEffect } from 'react'
import axios from 'axios'
import LoginPromtOverlay from './components/elements/LoginPromtOverlay';
import ErrorOverlay from "./components/elements/ErrorOverlay"
const Test = () => {

    const [value, setValue] = React.useState("");
    const [errorStatus, setErrorStatus] = React.useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/test", { withCredentials: true });
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
            {errorStatus === 401 && <ErrorOverlay />}
        </div>
    )
}

export default Test
